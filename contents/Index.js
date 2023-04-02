import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import { createContext, useContext, useEffect, useState } from 'react';

import {
  Box,
  Card,
  CardActions,
  CardContent,
  Grid,
  Hidden,
  Link,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import Container from '../components/Container';
import MyComponent from '../components/MyComponent';
import { formatDirectory, getDocBySlug } from '../utils';
import BottomNav from './BottomNav';
// import Test from "./Test";
import { PcDirectory } from './Directory';
import TabChapter from './TabChapter';
import { ReadContext } from './context.js';

import { useInView } from 'react-intersection-observer';

export default function Content(props) {
  
  const { md } = props;

  const [name, setName] = useState(md.props.file[0]?.text);


  const [readData, setReadData] = useState({
    counter: 32,
    unRead: 0,
    currentIndex: 0,
    actionFrom: 'nextButton',
  });
  const [mdxSource, setMdxSource] = useState('');

  console.log('handleNext name 0', name);
  useEffect(() => {
    fetch(`/api/getFile/${name}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('data------------', data);
        setMdxSource(data.mdxSource);
      })
      .catch((error) => console.error('err--------', error));
  }, [name]);


  const handleNext = (name) => {
    console.log('handleNext name 2', name);
    setName(name);
  };

  const components = {
    MyComponent,
  };

  const theme = useTheme();
  console.log('theme.palette?.mode', theme.palette?.mode);
  const smallScreen = useMediaQuery(theme.breakpoints.down('md'));

  console.log('smallScreen', smallScreen)
  return (
    <ReadContext.Provider value={{ readData, setReadData }}>

      {/* <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: "pink",
          paddingBottom: '20px'
        }}
 > */}

      <Container marginTop={4} >
              <Box display="flex" justifyContent="space-between">
                <Box
                  marginRight={{
                    xs: 0,
                    sm: 2,
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor:
                        theme.palette?.mode === 'dark' ? '#0F0F0F' : '#fff',
                      maxWidth: '920px',//smallScreen ? '920px' : '340px',
                      color: theme.palette?.mode === 'dark' ? '#fff' : '#000'
                    }}
                    borderRadius={2}
                    padding={{
                      xs: 2,
                      sm: 8,
                    }}
                    
                  >
                    {mdxSource && (
                      <MDXRemote components={components} {...mdxSource}></MDXRemote>
                    )}
                    {/* {md} */}
                  </Box>
                  <TabChapter marginTop={{ xs: '20px', sm: '160px' }}></TabChapter>
                </Box>
                <Hidden smDown>
                  <PcDirectory
                    directoryText={md.props.file}
                    handleNext={handleNext}
                  ></PcDirectory>
                </Hidden>
                {/* <Test /> */}
              </Box>
      </Container>

      <Box
        sx={{
          flexShrink: 0,
          position: 'fixed',
          zIndex: '1',
          bottom: 0,
          top: "auto",
          width: "100vw",
        }}
      >
        <Hidden smUp>
          <BottomNav directoryText={md.props.file} />
        </Hidden>
      </Box>
      {/* </Box> */}

    </ReadContext.Provider>
  );
}

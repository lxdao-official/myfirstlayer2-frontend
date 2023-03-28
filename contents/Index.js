import { createContext, useContext, useState, useEffect } from 'react';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Grid,
  Hidden,
  Link,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import path from 'path';

import { MDXRemote } from 'next-mdx-remote';

import { serialize } from 'next-mdx-remote/serialize';

import Container from '../components/Container';
import BottomNav from './BottomNav';
// import Test from "./Test";
import { PcDirectory } from './Directory';
import TabChapter from './TabChapter';
import { ReadContext } from './context.js';
import { formatDirectory, getDocBySlug } from '../utils';
import MyComponent from '../components/MyComponent';

// async function getFile() {
//   console.log('-----fs-----', fs);
//   const directoryPath = path.join(process.cwd(), '/mdx/zh/MyFirst-Layer2_Content');
//   const files = await fs.readdirSync(directoryPath);
//   const fileNames = files.map((file) => file);
//   const directory = formatDirectory(fileNames);
//   const { content, meta } = getDocBySlug(directory[0]?.text, locale);
//   const mdxSource = await serialize(content);
//   console.log('----------', files);
//   console.log('fileNames--------', directory)
//   console.log('mdxSource--------', mdxSource)
//   return {
//     mdxSource,
//   }

// }

export default function Content(props) {

  // const directoryPath = path.join(process.cwd(), '/mdx/zh/MyFirst-Layer2_Content');
  // function readFileDirectory() {
  //   const files = require.context('/mdx/zh/MyFirst-Layer2_Content', true);
  //   const fileUrls = files.keys().map(files);
  //   return fileUrls;
  // }
  const { md } = props;


  const [name, setName] = useState(md.props.file[0]?.text);


  // console.log('Content props fileNames', props)
  const theme = useTheme();

  // console.log('fileNames', md.props.file);
  const [readData, setReadData] = useState({counter: 32, unRead: 0, currentIndex: 0, actionFrom: 'nextButton'});
  const [mdxSource, setMdxSource ] = useState('')
  console.log('theme.palette.mode', theme.palette.mode)

  console.log('handleNext name 0', name);
  useEffect(() => {
    fetch(`/api/getFile/${name}`)
    .then(response => response.json())
    .then(data => { console.log('data------------', data); setMdxSource(data.mdxSource)})
    .catch(error => console.error('err--------', error));
  }, [name])
  // useEffect(() => {
  //   console.log('readFileDirectory-----------', readFileDirectory());
  //   const { content, meta } = getDocBySlug(readFileDirectory()[0]);
  //   console.log('content', content)
  // }, [])
  // useEffect(async () => {
  //   await getFile();
  // }, [])

  const handleNext = (name) => {
    // if (name.includes('md')) {
    //   name = name.substr(0, name.length - 3);
    // }
    console.log('handleNext name 2', name);
    setName(name);
  };

  const components = {
    MyComponent,
  };


  return (
    <ReadContext.Provider value={{readData, setReadData}}>
      <Container marginTop={4}>
        <Box display="flex" justifyContent="space-between">
          <Box
            marginRight={{
              xs: 0,
              sm: 2,
            }}
          >
            <Box
              sx={{
                backgroundColor: theme.palette.mode === 'dark' ? '#0F0F0F' : '#ECECEC',
                maxWidth: '920px',
              }}
              borderRadius={2}
              padding={{
                xs: 2,
                sm: 8,
              }}
            >
              {mdxSource && <MDXRemote components={components} {...mdxSource}>
              </MDXRemote>}
              {/* {md} */}
            </Box>
            <TabChapter marginTop={{ xs: '20px', sm: '160px' }}></TabChapter>
          </Box>
          <Hidden smDown>
            <PcDirectory directoryText={md.props.file} handleNext={handleNext}></PcDirectory>
          </Hidden>
          {/* <Test /> */}
        </Box>
      </Container>
      <Hidden smUp>
        <BottomNav />
      </Hidden>
    </ReadContext.Provider>
  );
}

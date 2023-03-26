import { createContext, useContext, useState } from 'react';
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

import Container from '../components/Container';
import BottomNav from './BottomNav';
// import Test from "./Test";
import { PcDirectory } from './Directory';
import TabChapter from './TabChapter';
import { ReadContext } from './context.js';

export default function Content(props) {
  console.log('Content props fileNames', props)
  const theme = useTheme();

  const { md } = props;
  console.log('fileNames', md.props.file);
  const [readData, setReadData] = useState({counter: 32, unRead: 0, currentIndex: 0, actionFrom: 'nextButton'});

  console.log('theme.palette.mode', theme.palette.mode)
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
                // backgroundColor: theme.palette.mode === 'dark' ? '#1E1E1E' : '#ECECEC',
                // width: 920,
                backgroundColor: '#1E1E1E'
              }}
              // width
              borderRadius={2}
              padding={{
                xs: 2,
                sm: 8,
              }}
            >
              {md}
            </Box>
            <TabChapter marginTop={{ xs: '20px', sm: '160px' }}></TabChapter>
          </Box>
          <Hidden smDown>
            <PcDirectory directoryText={md.props.file}></PcDirectory>
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

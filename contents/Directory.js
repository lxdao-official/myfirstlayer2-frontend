import {
  Link,
  Card,
  Box,
  Typography,
  Grid,
  CardContent,
  CardActions,
  createTheme,
  ThemeProvider,
  SwipeableDrawer,
  Button,
  Hidden,
} from '@mui/material';
import { useState } from 'react';

import Progress from './Progress';
const directoryText = [
  [{ text: '前言（Before Layer2）', main: true }, { text: '区块链的不可能三角',  main: false }],
  [{ text: 'Layer2演进历程',  main: true }, { text: '状态通道侧链' }, { text: 'Plasma', main: false}, { text: 'Rollup', main: false}],
  [{ text: 'Rollup机制与原理',  main: true }, { text: 'Rollup扩容核心原理之一：压缩', main: false }, { text: 'Optimistic Rollup', main: false}, { text: 'ZK-Rollup', main: false}],
  [{ text: 'Layer2未来展望',  main: true }, { text: 'Validium', main: false }, { text: 'Volition', main: false}],
  [{ text: '前言（Before Layer2）', main: true }, { text: '区块链的不可能三角',  main: false }],
  [{ text: 'Layer2演进历程',  main: true }, { text: '状态通道侧链' }, { text: 'Plasma', main: false}, { text: 'Rollup', main: false}],
  [{ text: 'Rollup机制与原理',  main: true }, { text: 'Rollup扩容核心原理之一：压缩', main: false }, { text: 'Optimistic Rollup', main: false}, { text: 'ZK-Rollup', main: false}],
  [{ text: 'Layer2未来展望',  main: true }, { text: 'Validium', main: false }, { text: 'Volition', main: false}],
];

const readStatus = [
  '/content/read.png',
  '/content/unread.png',
];

const theme = createTheme();

theme.typography.h6 = {
  fontSize: 14,
  fontWeight: 700,
  fontFamily: 'Alibaba PuHuiTi',
};

theme.typography.subtitle1 = {
  fontSize: 14,
  fontWeight: 400,
  fontFamily: 'Alibaba PuHuiTi',
}

theme.typography.progress = {
  fontSize: 8,
  fontWeight: 600,
  fontFamily: 'Open Sans',
  color: '#747474',
}

export default function Directory() {
  return (
    <div>
      <Hidden smUp>
        <MobileDirectory></MobileDirectory>
      </Hidden>
      <Hidden smDown>
        <PcDirectory></PcDirectory>
      </Hidden>
    </div>
  )
}

const Item = (props) => {
  
  const { data } = props;
  return (
    <Box>
      {
        data?.map((item, index) => (
          <Box
            key={index}
            display="flex"
            paddingLeft={!item?.main ? 2 : 0}
            marginTop={1}
          >
            {/* TODO: sm设置无效 */}
            <Box
              marginRight={1}
              sm={{
                marginTop: 2,
                marginRight: 10,
              }}
              xs={{
                marginTop: 2,
                marginRight: 10,
              }}
              md={{
                marginTop: 2,
                marginRight: 10,
              }}
            >
              <img src={readStatus[0]} />
            </Box>
            <Box>
                <Typography variant={item?.main ? 'h6' : 'subtitle1'}>{item?.text}</Typography>
            </Box>
          </Box>
        ))
      }

    </Box>
  )
}

const PcDirectory = () => {
  return (
    <Box 
      sx={{
        width: 247,
        backgroundColor: '#ECECEC',
        borderRadius: 2,
        paddingX: '26px',
        paddingBottom: '45px',

      }}
    >
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            textAlign: 'center',
            paddingY: '20px',
          }}
        >
          <Typography variant='progress'>当前浏览进度</Typography>
        </Box>
        <Progress></Progress>
        {
          directoryText?.map((row, index) => (
            <Item data={[...row]} key={index}/>
          ))
        }
      </ThemeProvider>
    </Box>
  )
}

const MobileDirectory = () => {
  const [drawerStatus, setDrawerStatus] = useState(false);

  return (
    <Box
    >
      <Button onClick={() => setDrawerStatus(true)}>bottom</Button>
        <SwipeableDrawer
          anchor='bottom'
          open={drawerStatus}
          onClose={() => setDrawerStatus(false)}
          onOpen={() => setDrawerStatus(true)}
        >
          <Box
            paddingX={10}
            height='400px'
          >
          {
            directoryText?.map((row, index) => (
              <Item data={[...row]} key={index}/>
            ))
          }
          </Box>
        </SwipeableDrawer>
    </Box>
    
  )
}
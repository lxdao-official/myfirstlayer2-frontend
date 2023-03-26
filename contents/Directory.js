import { ConnectButton } from '@rainbow-me/rainbowkit';
import { getAccount } from '@wagmi/core';
import { useContext, useEffect, useState } from 'react';
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from 'wagmi';

import {
  Avatar,
  Box,
  Button,
  ListItem,
  ListItemAvatar,
  ListItemText,
  SwipeableDrawer,
  ThemeProvider,
  Typography,
  createTheme,
  useTheme,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

import abi from '../abi.json';
import { svg } from '../common/constans';
import showMessage from '../components/showMessage';
import Progress from './Progress';
import { ReadContext } from './context.js';

// const directoryText = [
//   { text: '前言（Before Layer2）', status: true, main: true },
//   { text: '区块链的不可能三角', status: false, main: false },
//   { text: 'Layer2演进历程', status: true, main: true },
//   { text: '状态通道侧链', status: true, main: false },
//   { text: 'Plasma', status: false, main: false },
//   { text: 'Rollup', status: false, main: false },
//   { text: 'Rollup机制与原理', status: true, main: true, main: false },
//   { text: 'Rollup扩容核心原理之一：压缩', status: false, main: false },
//   { text: 'Optimistic Rollup', status: false, main: false },
//   { text: 'ZK-Rollup', status: false, main: false },
//   { text: 'Layer2未来展望', status: true, main: true },
//   { text: 'Validium', status: false },
//   { text: 'Volition', status: false },
// ];

const readStatus = ['/content/read.png', '/content/unread.png'];

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
    overflow: 'hidden',
    // width: "200px",
  },
  listItem: {
    borderRadius: '10px',
    '&:hover': {
      // background: theme.palette.mode === 'dark' ? '#3C3C3C' : '#F3F3F3', //"#3C3C3C",
      cursor: 'pointer',
    },
    // "&.Mui-selected": {
    //   background: "#3C3C3C",
    //   color: "#fff",
    // },
  },
  avatar: {
    width: '15px', // 图像的大小
    height: '15px',
  },
  text: {
    marginLeft: '-30px',
    '& .MuiTypography-body1': {
      fontSize: (props) => props.fontSize, // 使用props传入字体大小
    },
  },
  mainTitle: {
    fontSize: '1rem',
    fontWeight: 700,
    fontFamily: 'Alibaba PuHuiTi',
  },
  subtitle: {
    fontSize: '1rem',
    fontWeight: 400,
    fontFamily: 'Alibaba PuHuiTi',
  },
}));

const theme = createTheme({
  typography: {
    h6: {
      fontSize: '1rem',
      fontWeight: 700,
      fontFamily: 'Alibaba PuHuiTi',
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 400,
      fontFamily: 'Alibaba PuHuiTi',
    },
  },
});

theme.typography.progress = {
  fontSize: 8,
  fontWeight: 600,
  fontFamily: 'Open Sans',
  color: '#747474',
};

/**TODO: 后续优化 */
// function Contents(props) {
//   const [directory, setDirectory] = useState(directoryText);
// 	const contextData = useContext(ReadContext);
// 	const { readData, setReadData } = contextData;
// 	const { currentIndex, unRead, counter, actionFrom } = readData;

//   console.log('readData context', readData);
// 	useEffect(() => {
// 		if (actionFrom === 'nextButton') {
// 			console.log('22')
// 			const newArr = [...directory];
// 			newArr[currentIndex - 1] = {...directory[currentIndex - 1], status: true};
// 			setDirectory(newArr);
// 		}
// 	}, [currentIndex])
// 	console.log('readData', readData);

// 	const onNext = (index) => {
// 		console.log('index', index)
// 		const newArr = [...directory];
// 			newArr[index] = {...directory[index], status: true};
// 			setDirectory(newArr);
// 			setReadData({currentIndex: index, unRead: unRead + 1, counter, actionFrom: 'nextContent'})
// 	};

//   return (
//     <div>

//     </div>
//   )
// }

export function PcDirectory(props) {
  const { directoryText } = props;
  console.log('directoryText', directoryText);
  const [directory, setDirectory] = useState(directoryText);
  const contextData = useContext(ReadContext);
  const { readData, setReadData } = contextData;
  const { currentIndex, unRead, counter, actionFrom } = readData;
  const { isConnected } = getAccount();
  const { config } = usePrepareContractWrite({
    address: '0x43c4Ebf956F7804596c333B209Ff246a476594DA',
    abi: abi,
    functionName: 'mint',
    args: [svg],
  });

  // const theme = useTheme();

  const { data, write, error, isError } = useContractWrite(config);
  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  useEffect(() => {
    // const directoryText = [
    //   { text: '前言（Before Layer2）', status: true, main: true },
    //   { text: '区块链的不可能三角', status: false, main: false },
    //   { text: 'Layer2演进历程', status: true, main: true },
    //   { text: '状态通道侧链', status: true, main: false },
    //   { text: 'Plasma', status: false, main: false },
    //   { text: 'Rollup', status: false, main: false },
    //   { text: 'Rollup机制与原理', status: true, main: true, main: false },
    //   { text: 'Rollup扩容核心原理之一：压缩', status: false, main: false },
    //   { text: 'Optimistic Rollup', status: false, main: false },
    //   { text: 'ZK-Rollup', status: false, main: false },
    //   { text: 'Layer2未来展望', status: true, main: true },
    //   { text: 'Validium', status: false },
    //   { text: 'Volition', status: false },
    // ];
    let unRead = 0;
    directory.forEach((item) => {
      if (item?.status) {
        unRead++;
      }
    });
    setReadData({
      currentIndex,
      unRead,
      counter: directory.length,
      asctionFrom: 'nextContent',
    });
  }, []);

  useEffect(() => {
    if (actionFrom === 'nextButton') {
      console.log('22');
      const newArr = [...directory];
      newArr[currentIndex - 1] = {
        ...directory[currentIndex - 1],
        status: true,
      };
      setDirectory(newArr);
    }
  }, [currentIndex]);
  console.log('readData', readData);

  useEffect(() => {
    if (isError) {
      showMessage({
        type: 'error',
        title: `Mint Failed`,
        body: data?.message,
      });
    }
  }, [isError]);

  useEffect(() => {
    if (isSuccess) {
      showMessage({
        type: 'success',
        title: `Mint Successfully`,
      });
    }
  }, [isSuccess]);

  const onNext = (index) => {
    console.log('index', index);
    const newArr = [...directory];
    newArr[index] = { ...directory[index], status: true };
    setDirectory(newArr);
    setReadData({
      currentIndex: index,
      unRead: unRead + 1,
      counter,
      asctionFrom: 'nextContent',
    });
  };

  console.log('directory', directory);
  return (
    <Box>
      <Box>
        <Box
          sx={{ display: 'flex', justifyContent: 'center', width: '247px' }}
          marginBottom={3}
        >
          <ConnectButton showBalance={false} />
        </Box>

        {isConnected ? (
          <Box
            sx={{ display: 'flex', justifyContent: 'center', width: '120%' }}
            marginBottom={3}
          >
            <Button
              variant="contained"
              disabled={!write || isLoading}
              onClick={() => write()}
            >
              {isLoading ? 'Minting...' : 'Mint'}
            </Button>{' '}
          </Box>
        ) : null}
      </Box>
      <Box
        sx={{
          width: '247px',
          maxHeight: '987px',
          overflow: 'auto',
          backgroundColor:
            theme.palette.mode === 'dark' ? '#1E1E1E' : '#ECECEC', //'#ECECEC',
          // backgroundColor: '#1E1E1E',
          borderRadius: 2,
          paddingX: '26px',
          paddingBottom: '45px',
        }}
      >
        {/* <ThemeProvider theme={theme}> */}
        <Box
          sx={{
            textAlign: 'center',
            paddingY: '20px',
          }}
        >
          <Typography variant="progress">当前浏览进度</Typography>
        </Box>
        <Progress></Progress>
        {/* {directory?.map((row, index) => (
            <Item data={[...row]} key={index} onClick={() => onNext(index)} />
          ))} */}
        {directory?.map((row, index) => {
          console.log('row', row);
          return (
            <Item
              data={[row]}
              key={index}
              onNext={() => onNext(index)}
              {...props}
            />
          );
        })}
        {/* </ThemeProvider> */}
      </Box>
    </Box>
  );
}

export function MobileDirectory(props) {
  const [drawerStatus, setDrawerStatus] = useState(false);
  const [directory, setDirectory] = useState(directoryText);
  const contextData = useContext(ReadContext);
  const { readData, setReadData } = contextData;
  const { currentIndex, unRead, counter, actionFrom } = readData;

  console.log('readData context', readData);
  useEffect(() => {
    if (actionFrom === 'nextButton') {
      console.log('22');
      const newArr = [...directory];
      newArr[currentIndex - 1] = {
        ...directory[currentIndex - 1],
        status: true,
      };
      setDirectory(newArr);
    }
  }, [currentIndex]);
  console.log('readData', readData);

  const onNext = (index) => {
    console.log('index', index);
    const newArr = [...directory];
    newArr[index] = { ...directory[index], status: true };
    setDirectory(newArr);
    setReadData({
      currentIndex: index,
      unRead: unRead + 1,
      counter,
      actionFrom: 'nextContent',
    });
  };

  return (
    <Box>
      <Button onClick={() => setDrawerStatus(true)}>bottom</Button>
      <SwipeableDrawer
        anchor="bottom"
        open={drawerStatus}
        onClose={() => setDrawerStatus(false)}
        onOpen={() => setDrawerStatus(true)}
      >
        <Box paddingX={10} height="400px">
          {directory?.map((row, index) => (
            <Item data={[...row]} key={index} onClick={() => onNext(index)} />
          ))}
        </Box>
      </SwipeableDrawer>
    </Box>
  );
}

const Item = (props) => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleListItemClick = (item, index) => {
    console.log('item', item);

    !item?.status && onNext(index);
    setSelectedIndex(index);
  };

  console.log('props', props);
  const { data, onNext } = props;
  // const theme = useTheme(props);

  console.log('thme', theme);

  return (
    // <ThemeProvider theme={theme}>
    <Box>
      {data?.map((item, index) => (
        <ListItem
          button
          selected={selectedIndex === index}
          onClick={() => handleListItemClick(item, index)}
          className={classes.listItem}
        >
          <ListItemAvatar>
            <Avatar
              className={classes.avatar}
              src={readStatus[item?.status ? 0 : 1]}
            />
          </ListItemAvatar>
          <ListItemText
            className={[
              classes.text,
              item?.main ? classes.mainTitle : classes.subtitle,
            ]}
            primary={item?.text}
            fontSize={22}
          ></ListItemText>
        </ListItem>
      ))}
    </Box>
    // </ThemeProvider>
  );
  // return (
  //   <ThemeProvider theme={theme}>
  //     <Box>
  //       {data?.map((item, index) => (
  //         <Box
  //           key={index}
  //           display="flex"
  //           // paddingLeft={!item?.status ? 2 : 0}
  //           marginTop={1}
  //           onClick={() => onNext(index)}
  //         >
  //           {/* TODO: sm设置无效 */}
  //           <Box
  //             backgroundColor="#3C3C3C"
  //           >
  //             <Box
  //               marginRight={1}
  //               // sm={{
  //               //   marginTop: 2,
  //               //   marginRight: 10,
  //               // }}
  //               // xs={{
  //               //   marginTop: 2,
  //               //   marginRight: 10,
  //               // }}
  //               // md={{
  //               //   marginTop: 2,
  //               //   marginRight: 10,
  //               // }}
  //             >
  //               <img src={readStatus[item?.status ? 0 : 1]} />
  //             </Box>
  //             <Box>
  //               <Typography variant={item?.main ? 'h6' : 'subtitle1'}>
  //                 {item?.text}
  //               </Typography>
  //             </Box>
  //           </Box>

  //         </Box>
  //       ))}
  //     </Box>
  //   </ThemeProvider>
  // );
};

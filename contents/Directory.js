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
    // boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
    overflow: 'hidden',
  },
  listRoot: {
    overflow: 'hidden',
    marginTop: '10px',
    color: theme.palette.mode === 'dark' ? '#fff' : '#000',
  },
  listItem: {
    borderRadius: '10px',
    '&:hover': {
      background: theme.palette.mode === 'dark' ? '#3C3C3C' : '#F3F3F3',
      cursor: 'pointer',
    },
    '&:focus': {
      background: theme.palette.mode === 'dark' ? '#3C3C3C' : '#F3F3F3',
    },
    "&.Mui-selected": {
      background: theme.palette.mode === 'dark' ? '#3C3C3C' : '#F3F3F3',
    },
    '&.Mui-selected:hover': {
      background: theme.palette.mode === 'dark' ? '#3C3C3C' : '#F3F3F3',

    },
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

export function PcDirectory(props) {
  const { directoryText, handleNext } = props;
  console.log('directoryText', directoryText);
  const [directory, setDirectory] = useState(directoryText);
  const [selectedIndex, setSelectedIndex] = useState(0);

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

  console.log('PcDirectory directory', directory);
  // const theme = useTheme();

  const { data, write, error, isError } = useContractWrite(config);
  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  useEffect(() => {
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

  const onNext = (index, name) => {
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
    setSelectedIndex(index);
    handleNext(name);
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
          borderRadius: 2,
          paddingX: '11px',
          paddingBottom: '45px',
        }}
        backgroundColor={theme.palette.mode === 'dark' ? '#0F0F0F' : '#fff'}

      >
        <Box
          sx={{
            textAlign: 'center',
            paddingY: '20px',
            color: '#747474',
            fontSize: '10px',
          }}
        >
          <Typography variant="progress">当前浏览进度</Typography>
          {/* TODO: dark 有问题 */}
        <Typography variant="progress">{theme.palette.mode}</Typography>

        </Box>
        <Progress></Progress>
        {directory?.map((row, index) => {
          return (
            <Item
              rowData={row}
              key={index}
              selected={selectedIndex === index }
              onNext={() => onNext(index, row.text)}
              {...props}
            />
          );
        })}
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

  const onNext = (index, name) => {
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
  const { rowData, key, selected, onNext } = props;

  const handleListItemClick = (item, index) => {
    !item?.status && onNext(index);
  };

  return (
    <Box className={classes.listRoot}>
        <ListItem
          button
          selected={selected}
          onClick={() => handleListItemClick(rowData, key)}
          className={classes.listItem}
        >
          <ListItemAvatar>
            <Avatar
              className={classes.avatar}
              src={readStatus[rowData?.status ? 0 : 1]}
            />
          </ListItemAvatar>
          <ListItemText
            className={[
              classes.text,
              rowData?.main ? classes.mainTitle : classes.subtitle,
            ]}
            primary={rowData?.text}
            fontSize={22}
          ></ListItemText>
        </ListItem>
    </Box>
  );
}
  
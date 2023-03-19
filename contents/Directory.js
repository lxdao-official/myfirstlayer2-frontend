import { ConnectButton } from '@rainbow-me/rainbowkit';
import { getAccount } from '@wagmi/core';
import { useEffect, useState } from 'react';
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from 'wagmi';

import {
  Box,
  Button,
  SwipeableDrawer,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material';

import abi from '../abi.json';
import { svg } from '../common/constans';
import showMessage from '../components/showMessage';
import Progress from './Progress';

const directoryText = [
  [
    { text: '前言（Before Layer2）', main: true },
    { text: '区块链的不可能三角', main: false },
  ],
  [
    { text: 'Layer2演进历程', main: true },
    { text: '状态通道侧链' },
    { text: 'Plasma', main: false },
    { text: 'Rollup', main: false },
  ],
  [
    { text: 'Rollup机制与原理', main: true },
    { text: 'Rollup扩容核心原理之一：压缩', main: false },
    { text: 'Optimistic Rollup', main: false },
    { text: 'ZK-Rollup', main: false },
  ],
  [
    { text: 'Layer2未来展望', main: true },
    { text: 'Validium', main: false },
    { text: 'Volition', main: false },
  ],
  [
    { text: '前言（Before Layer2）', main: true },
    { text: '区块链的不可能三角', main: false },
  ],
  [
    { text: 'Layer2演进历程', main: true },
    { text: '状态通道侧链' },
    { text: 'Plasma', main: false },
    { text: 'Rollup', main: false },
  ],
  [
    { text: 'Rollup机制与原理', main: true },
    { text: 'Rollup扩容核心原理之一：压缩', main: false },
    { text: 'Optimistic Rollup', main: false },
    { text: 'ZK-Rollup', main: false },
  ],
  [
    { text: 'Layer2未来展望', main: true },
    { text: 'Validium', main: false },
    { text: 'Volition', main: false },
  ],
];

const readStatus = ['/content/read.png', '/content/unread.png'];

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
};

theme.typography.progress = {
  fontSize: 8,
  fontWeight: 600,
  fontFamily: 'Open Sans',
  color: '#747474',
};

const Item = (props) => {
  const { data } = props;
  return (
    <Box>
      {data?.map((item, index) => (
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
            <Typography variant={item?.main ? 'h6' : 'subtitle1'}>
              {item?.text}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export function PcDirectory() {
  const { isConnected } = getAccount();
  const { config } = usePrepareContractWrite({
    address: '0x43c4Ebf956F7804596c333B209Ff246a476594DA',
    abi: abi,
    functionName: 'mint',
    args: [svg],
  });

  const { data, write, error, isError } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

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

  return (
    <Box>
      <Box>
        <Box
          sx={{ display: 'flex', justifyContent: 'center', width: '120%' }}
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
          width: '120%',
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
            <Typography variant="progress">当前浏览进度</Typography>
          </Box>
          <Progress></Progress>
          {directoryText?.map((row, index) => (
            <Item data={[...row]} key={index} />
          ))}
        </ThemeProvider>
      </Box>
    </Box>
  );
}

export function MobileDirectory() {
  const [drawerStatus, setDrawerStatus] = useState(false);

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
          {directoryText?.map((row, index) => (
            <Item data={[...row]} key={index} />
          ))}
        </Box>
      </SwipeableDrawer>
    </Box>
  );
}

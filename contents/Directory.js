import { ConnectButton } from '@rainbow-me/rainbowkit';
import { getAccount } from '@wagmi/core';
import { useTranslations } from 'next-intl';
import { useContext, useEffect, useState } from 'react';
import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi';

import { Avatar, Box, Button, IconButton, ListItem, ListItemAvatar, ListItemText, SwipeableDrawer, ThemeProvider, Typography, createTheme, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

import abi from '../abi.json';
import { svg } from '../common/constans';
import { MFL2ConnectButton } from '../components/MFL2ConnectButton';
import showMessage from '../components/showMessage';
import down from '../public/content/down.svg';
import up from '../public/content/up.svg';
import { formatChapterTitle } from '../utils.js';
import Progress from './Progress';
import { ReadContext } from './context.js';

const readStatusImg = ['/content/read.png', '/content/unread.png'];

const useStyles = makeStyles((theme) => ({
  root: {
    // boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
    overflow: 'hidden',
  },
  listRoot: {
    overflow: 'hidden',
    marginTop: '10px',
    color: theme.palette?.mode === 'dark' ? '#fff' : '#000',
  },
  listItem: {
    borderRadius: '10px',
    alignItems: 'flex-start',
    '&:hover': {
      background: theme.palette?.mode === 'dark' ? '#3C3C3C' : '#F3F3F3',
      cursor: 'pointer',
    },
    '&:focus': {
      background: theme.palette?.mode === 'dark' ? '#3C3C3C' : '#F3F3F3',
    },
    '&.Mui-selected': {
      background: theme.palette?.mode === 'dark' ? '#3C3C3C' : '#F3F3F3',
    },
    '&.Mui-selected:hover': {
      background: theme.palette?.mode === 'dark' ? '#3C3C3C' : '#F3F3F3',
    },
  },
  avatarContain: {
    marginTop: '10px',
    // background: '#000',
    // position: 'absolute',
    textAlign: 'end',
  },
  avatar: {
    width: '15px', // 图像的大小
    height: '15px',
  },
  text: {
    marginLeft: '-30px',

    // top: 0,
    // width: '10px',
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
  const { directory, readStatus, selectedIndex, handleNext, onTabChapter } = props;

  const theme = useTheme();

  console.log('directory', directory);
  console.log('readStatus', readStatus);
  return (
    <Box>
      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '247px' }} marginBottom={3}>
          <MFL2ConnectButton />
        </Box>
      </Box>
      <Box
        sx={{
          width: '247px',
          borderRadius: 2,
          paddingX: '11px',
          paddingBottom: '45px',
        }}
        backgroundColor={theme.palette?.mode === 'dark' ? '#0F0F0F' : '#fff'}
      >
        <Box
          sx={{
            paddingTop: '18px',
          }}
        >
          <Progress></Progress>
        </Box>
        <Box
          sx={{
            maxHeight: '987px',
            overflow: 'auto',
          }}
        >
          {directory?.map((row, index) => {
            return <Item rowData={{ ...row, status: readStatus[index] }} key={index} selected={selectedIndex === index} onNext={() => onTabChapter('lastOrNext', { index, ...row })} {...props} />;
          })}
        </Box>
      </Box>
    </Box>
  );
}

export function MobileDirectory(props) {
  const { directory, readStatus, selectedIndex, handleNext, onTabChapter } = props;
  const [drawerStatus, setDrawerStatus] = useState(false);

  const onNext = (action, data) => {
    onTabChapter(action, data);
    setDrawerStatus(false);
  };

  return (
    <Box>
      <IconButton
        sx={{
          backgroundColor: '#000',
          width: '28px',
          height: '28px',
          // borderRadius: '80%',
          // alignItems: 'center',
          textAlign: 'center',
          // alignContent: 'center',
        }}
        onClick={() => setDrawerStatus(true)}
      >
        {drawerStatus ? (
          <svg width="12" height="8" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.72972 0.637692L4.62055 2.74687C4.3794 2.98782 3.98859 2.98787 3.74739 2.74697L1.63704 0.637568C1.33559 0.336258 0.846976 0.336313 0.545597 0.637692C0.244239 0.939051 0.244239 1.42765 0.545597 1.72901L3.31027 4.49368C3.79244 4.97585 4.5742 4.97585 5.05637 4.49368L7.82104 1.72901C8.1224 1.42765 8.1224 0.93905 7.82104 0.637691C7.51968 0.336333 7.03108 0.336333 6.72972 0.637692Z"
              fill="white"
            />
          </svg>
        ) : (
          <svg width="12" height="8" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.63697 4.72901L3.74615 2.61983C3.9873 2.37888 4.3781 2.37883 4.61931 2.61973L6.72966 4.72913C7.03111 5.03044 7.51972 5.03039 7.8211 4.72901C8.12246 4.42765 8.12246 3.93905 7.8211 3.63769L5.05643 0.873023C4.57426 0.390849 3.7925 0.390849 3.31033 0.873023L0.545658 3.63769C0.2443 3.93905 0.244299 4.42765 0.545658 4.72901C0.847017 5.03037 1.33562 5.03037 1.63697 4.72901Z"
              fill="white"
            />
          </svg>
        )}
      </IconButton>
      <SwipeableDrawer anchor="bottom" open={drawerStatus} onClose={() => setDrawerStatus(false)} onOpen={() => setDrawerStatus(true)}>
        <Box paddingX={3} height="400px">
          {directory?.map((row, index) => (
            <Item rowData={{ ...row, status: readStatus[index] }} key={index} selected={selectedIndex === index} onNext={() => onNext('lastOrNext', { index, ...row })} {...props} />
          ))}
        </Box>
      </SwipeableDrawer>
    </Box>
  );
}

const Item = (props) => {
  const classes = useStyles();
  const t = useTranslations('Directory');
  const { rowData, key, selected, onNext } = props;

  const handleListItemClick = (item, index) => {
    !item?.status && onNext(index);
  };

  return (
    <Box className={classes.listRoot}>
      <ListItem button selected={selected} onClick={onNext} className={classes.listItem}>
        <ListItemAvatar className={classes.avatarContain}>
          <Avatar className={classes.avatar} src={readStatusImg[rowData?.status ? 0 : 1]} />
        </ListItemAvatar>
        <ListItemText className={[classes.text, rowData?.main ? classes.mainTitle : classes.subtitle]} primary={t(formatChapterTitle(rowData?.text))} fontSize={22}></ListItemText>
      </ListItem>
    </Box>
  );
};

import { useTranslations } from 'next-intl';
import { useState } from 'react';

import { Box, Divider, IconButton, SwipeableDrawer, Typography, createTheme, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { formatChapterTitle } from '../utils.js';
import Progress from './Progress';

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'hidden',
  },
  listRoot: {
    overflow: 'hidden',
    marginTop: '2px',
    color: theme.palette?.mode === 'dark' ? '#fff' : '#000',
  },
  listItem: {
    borderRadius: '10px',
    padding: '10px 0',
    '&:hover': {
      background: theme.palette?.mode === 'dark' ? '#3C3C3C' : '#F3F3F3',
      cursor: 'pointer',
    },
    '&:focus': {
      background: theme.palette?.mode === 'dark' ? '#3C3C3C' : '#F3F3F3',
    },
    '&:active': {
      background: theme.palette?.mode === 'dark' ? '#3C3C3C' : '#F3F3F3',
    },
    '&.Mui-selected:hover': {
      background: theme.palette?.mode === 'dark' ? '#3C3C3C' : '#F3F3F3',
    },
  },
  avatarContain: {
    paddingRight: '10px',
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
  const { directory, selectedIndex, onTabChapter } = props;
  const t = useTranslations('Directory');
  const theme = useTheme();

  return (
    <Box>
      <Box
        sx={{
          paddingTop: '18px',
          width: '247px',
          borderRadius: '18px',
          paddingX: '26px',
          py: '32px',
          mb: '32px',
        }}
        backgroundColor={theme.palette?.mode === 'dark' ? '#0F0F0F' : '#fff'}
      >
        <Progress></Progress>
      </Box>
      <Box
        sx={{
          width: '247px',
          borderRadius: '18px',
          pt: '30px',
          pb: '43px',
          paddingX: '11px',
        }}
        backgroundColor={theme.palette?.mode === 'dark' ? '#0F0F0F' : '#fff'}
      >
        <Typography
          sx={{
            fontSize: '24px',
            color: '#000',
            paddingBottom: '10px',
          }}
        >
          {t('directory')}
        </Typography>
        <Divider
          sx={{
            marginBottom: '20px',
          }}
        />
        <Box>
          {directory?.map((row, index) => {
            return <Item rowData={{ ...row }} key={index} selected={selectedIndex === index} onNext={() => onTabChapter('lastOrNext', { index, ...row })} {...props} />;
          })}
        </Box>
      </Box>
    </Box>
  );
}

export function MobileDirectory(props) {
  const { directory, selectedIndex, onTabChapter } = props;
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
          textAlign: 'center',
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
        <Box paddingX={3} py={2} height="400px">
          {directory?.map((row, index) => (
            <Item rowData={{ ...row }} key={index} selected={selectedIndex === index} onNext={() => onNext('lastOrNext', { index, ...row })} {...props} />
          ))}
        </Box>
      </SwipeableDrawer>
    </Box>
  );
}

const Item = (props) => {
  const classes = useStyles();
  const t = useTranslations('Directory');
  const { rowData, selected, onNext } = props;

  return (
    <Box className={classes.listRoot}>
      <Box
        button
        selected={selected}
        onClick={onNext}
        className={classes.listItem}
        sx={{
          background: selected ? (theme.palette?.mode === 'dark' ? '#3C3C3C' : '#F3F3F3') : '',
          paddingX: 2,
        }}
      >
        <Box
          sx={{
            paddingLeft: rowData?.main ? '8px' : '26px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {!rowData?.main && (
            <Box
              sx={{
                height: '12px',
                width: '3px',
                borderRadius: '3px',
                backgroundColor: rowData?.status ? '#000' : '#ddd',
                marginRight: '10px',
              }}
            />
          )}
          <Box
            sx={{
              fontStyle: rowData?.main ? 'Bold' : 'Regular',
              fontWeight: rowData?.main ? 700 : 400,
              fontSize: '14px',
            }}
          >
            {t(formatChapterTitle(rowData?.text))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

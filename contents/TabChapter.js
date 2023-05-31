import { useTranslations } from 'next-intl';

import { Box, Hidden, Typography, useMediaQuery, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { formatChapterTitle } from '../utils.js';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    fontFamily: 'Open Sans',
    fontStyle: 'SemiBold',
    fontSize: '18px',
    // [theme?.breakpoints?.down('sm')]: {
    //   // display: 'flex',
    //   flexDirection: 'column',
    // },
  },
  container: {
    background: '#000000',
    height: '100px',
    width: '48%',
    cursor: 'pointer',
    borderRadius: '15px',
    // border: '1px solid #fff',
    // alignItems: 'center',
    // flex: 1,
    display: 'flex',
    // justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',

    padding: '0 25px',
    
    transition: 'all .3s ease-in-out',
    '-webkit-transition': 'all .3s ease-in-out',
    '&.MuiCard-root:focus-within': {
      border: 'none',
      backgroundImage: 'linear-gradient(to right, #193275 0%, #1E6A72 100%)',
    },
    '&.Mui-selected': {
      backgroundImage: 'linear-gradient(to right, #193275 0%, #1E6A72 100%)',
      border: 'none',
    },
    '&:active': {
      border: 'none',
      backgroundImage: 'linear-gradient(to right, #193275 0%, #1E6A72 100%)',
    },
    '&:hover': {
      backgroundImage: 'linear-gradient(to right, #3162E8 0%, #3AD5E3 100%)',
      // border: '1px solid #fff',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
    },
    // [theme?.breakpoints?.between('xs', 'sm')]: {
    //   borderRadius: '50px',
    //   height: '60px',
    //   height: '60px',
    //   marginBottom: '15px',
    // },
  },
  content: {
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    // [theme.breakpoints?.down('sm')]: {
    //   fontSize: '8px',
    //   padding: '12px',
    // },
  },

  mobileContainer: {
    background: '#000000',
    // height: '50px',
    cursor: 'pointer',
    borderRadius: '50px',
    border: '1px solid #fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '15px',

    // paddingLeft: '25px',
    padding: '10px 25px',
    '&.MuiCard-root:focus-within': {
      border: 'none',
      backgroundImage: 'linear-gradient(to right, #193275 0%, #1E6A72 100%)',
    },
    // "&.Mui-selected": {
    //   background: "#3C3C3C",
    //   color: "#fff",
    //   border: 'none',
    // },
    '&:hover': {
      backgroundImage: 'linear-gradient(to right, #3162E8 0%, #3AD5E3 100%)',
      border: '1px solid #fff',
    },
  },
  mobileContent: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    color: '#fff',
    justifyContent: 'space-between',
  },
}));

export default function TabChapter(props) {
  const { chapterData, onTabChapter } = props;

  const classes = useStyles();
  const t = useTranslations('Directory');
  const handleTabChapter = (action) => {
    if ((chapterData?.currentIndex === 0 && action === 'last') || (chapterData?.currentIndex === 22 && action === 'next')) {
      return;
    }
    onTabChapter(action);
  };

  return (
    <>
      <Hidden smDown>
        <Box className={classes.root} {...props}>
          <Box className={classes.container} onClick={() => handleTabChapter('last')}>
            <Box className={classes.content}>
              <Box sx={{ display: 'flex', width: '85px', alignItems: 'center' }}>
                <svg width="27" height="16" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M26 9C26.5523 9 27 8.55228 27 8C27 7.44772 26.5523 7 26 7V9ZM0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM26 7L1 7V9L26 9V7Z"
                    fill="white"
                  />
                </svg>
                <Typography style={{ fontSize: '12px', fontStyle: 'SemiBold', fontWeight: 200, paddingLeft: '5px' }}>{chapterData?.last ? t('previous-chapter') : t('current-chapter')}</Typography>
              </Box>
              <Box style={{ paddingLeft: '10px' }}>
                <Typography style={{ fontSize: '18px', fontStyle: 'SemiBold', fontWeight: 600 }}>{chapterData?.last ? t(formatChapterTitle(chapterData?.last)) : t(formatChapterTitle(chapterData?.current))}</Typography>
              </Box>
            </Box>
          </Box>

          <Box className={classes.container} onClick={() => handleTabChapter('next')}>
            <Box className={classes.content}>
              <Box>
                <Typography style={{ fontSize: '18px', fontStyle: 'SemiBold', fontWeight: 600 }}>{t(formatChapterTitle(chapterData?.next ? chapterData?.next : chapterData?.current))}</Typography>
              </Box>
              <Box style={{ display: 'flex', width: '85px', alignItems: 'center' }}>
                <Typography style={{ fontSize: '12px', fontStyle: 'SemiBold', fontWeight: 200, paddingRight: '5px' }}>{chapterData?.next ? t('next-chapter') : t('current-chapter')}</Typography>
                <svg width="27" height="16" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1 9C0.447715 9 0 8.55228 0 8C0 7.44772 0.447715 7 1 7L1 9ZM26.7071 7.29289C27.0976 7.68342 27.0976 8.31658 26.7071 8.70711L20.3431 15.0711C19.9526 15.4616 19.3195 15.4616 18.9289 15.0711C18.5384 14.6805 18.5384 14.0474 18.9289 13.6569L24.5858 8L18.9289 2.34315C18.5384 1.95262 18.5384 1.31946 18.9289 0.928932C19.3195 0.538408 19.9526 0.538408 20.3431 0.928932L26.7071 7.29289ZM1 7L26 7V9L1 9L1 7Z"
                    fill="white"
                  />
                </svg>
              </Box>
            </Box>
          </Box>
        </Box>
      </Hidden>

      <Hidden smUp>
        <Box {...props}>
          <Box className={classes.mobileContainer} onClick={() => onTabChapter('last')}>
            <Box className={classes.mobileContent}>
              <Box>
                <Typography style={{ fontSize: '8px', fontStyle: 'SemiBold', fontWeight: 200 }}>{chapterData?.last ? t('previous-chapter') : t('current-chapter')}</Typography>
                <Typography style={{ fontSize: '14px', fontStyle: 'SemiBold', fontWeight: 600 }}>{chapterData?.last ? t(formatChapterTitle(chapterData?.last)) : t(formatChapterTitle(chapterData?.current))}</Typography>
              </Box>
              <Box fontSize={'8px'}>
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.5 13C3.5 13.2761 3.72386 13.5 4 13.5C4.27614 13.5 4.5 13.2761 4.5 13L3.5 13ZM4.35355 0.646446C4.15829 0.451184 3.84171 0.451184 3.64645 0.646446L0.464466 3.82843C0.269204 4.02369 0.269204 4.34027 0.464466 4.53553C0.659729 4.7308 0.976311 4.7308 1.17157 4.53553L4 1.70711L6.82843 4.53553C7.02369 4.7308 7.34027 4.7308 7.53553 4.53553C7.7308 4.34027 7.7308 4.02369 7.53553 3.82843L4.35355 0.646446ZM4.5 13L4.5 1L3.5 1L3.5 13L4.5 13Z"
                    fill="white"
                  />
                </svg>
              </Box>
            </Box>
          </Box>

          <Box className={classes.mobileContainer} onClick={() => onTabChapter('next')}>
            <Box className={classes.mobileContent}>
              <Box>
                <Typography style={{ fontSize: '8px', fontStyle: 'SemiBold', fontWeight: 200 }}>{chapterData?.next ? t('next-chapter') : t('current-chapter')}</Typography>
                <Typography style={{ fontSize: '14px', fontStyle: 'SemiBold', fontWeight: 600 }}>{t(formatChapterTitle(chapterData?.next ? chapterData?.next : chapterData?.current))}</Typography>
              </Box>
              <Box fontSize={'8px'}>
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.5 1C3.5 0.723858 3.72386 0.5 4 0.5C4.27614 0.5 4.5 0.723858 4.5 1L3.5 1ZM4.35355 13.3536C4.15829 13.5488 3.84171 13.5488 3.64645 13.3536L0.464466 10.1716C0.269204 9.97631 0.269204 9.65973 0.464466 9.46447C0.659729 9.2692 0.976311 9.2692 1.17157 9.46447L4 12.2929L6.82843 9.46447C7.02369 9.2692 7.34027 9.2692 7.53553 9.46447C7.7308 9.65973 7.7308 9.97631 7.53553 10.1716L4.35355 13.3536ZM4.5 1L4.5 13L3.5 13L3.5 1L4.5 1Z"
                    fill="white"
                  />
                </svg>
              </Box>
            </Box>
          </Box>
        </Box>
      </Hidden>
    </>
  );
}

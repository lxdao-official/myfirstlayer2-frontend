
import { useContext } from 'react';
import {
  Box,
  Typography,
  CircularProgress,
  LinearProgress, 
  Button,
  Card,
  CardContent,
  IconButton,
  SvgIcon,
  useMediaQuery,
} from '@mui/material';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { makeStyles } from "@mui/styles";
import { useTranslations } from 'next-intl';

import { ReadContext } from './context.js';
import{ formatChapterTitle } from '../utils.js';

import arrowLeft from '../public/content/arrowLeft.svg';
import arrowRight from '../public/content/arrowRight.svg';


const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    justifyContent: "space-between",
    fontFamily: 'Open Sans',
    fontStyle: 'SemiBold',
    fontSize: '18px',
    [theme?.breakpoints?.down('sm')]: {
      // display: 'flex',
      flexDirection: 'column',
    },
  },
  root: {
    background: '#000000',
    height: '100px',
    width: '444px',
    cursor: 'pointer',
    borderRadius: '15px',
    border: '1px solid #fff',
    '&.MuiCard-root:focus-within': {
      border: 'none',
      backgroundImage: "linear-gradient(to right, #193275 0%, #1E6A72 100%)",

    },
    "&.Mui-selected": {
      background: "#3C3C3C",
      color: "#fff",
      border: 'none',
    },
    '&:hover': {
      backgroundImage: "linear-gradient(to right, #3162E8 0%, #3AD5E3 100%)",
      border: 'none',

    },
    [theme?.breakpoints?.down('sm')]: {
      borderRadius: '50px',
      height: '60px',
      width: '100%',
      marginBottom: '15px',
    },
  },
  content: {
    color: "#fff",
    display: 'flex',
    justifyContent: "space-between",
    alignItems: "center",
    padding: '30px',
    
    [theme?.breakpoints?.down('sm')]: {
      fontSize: '8px',
      padding: '12px',
    },
  },

}));

export default function TabChapter(props) {
  const { chapterData, onTabChapter } = props;
  console.log('TabChapter chapterData', chapterData)

  const classes = useStyles();

  const t = useTranslations('Directory');

  return (
    <Box className={classes.main} {...props}>
      <Card 
        className={classes.root}
        onClick={() => onTabChapter('last')}>
        <CardContent className={classes.content}>
          {
            chapterData?.last && (
              <Box fontSize={"8px"}>
                <svg width="27" height="16" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M26 9C26.5523 9 27 8.55228 27 8C27 7.44772 26.5523 7 26 7V9ZM0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM26 7L1 7V9L26 9V7Z" fill="white"/>
                </svg>
              </Box>
            )
          }
          <Box>
            <Typography fontSize={{xs: '8px', sm: '12px'}}>{chapterData?.last ? '上一章' : '当前章节'}</Typography>
            <Typography fontSize={{xs: '12px', sm: '18px'}}>{chapterData?.last ? t(formatChapterTitle(chapterData?.last)) : t(formatChapterTitle(chapterData?.current))}</Typography>
          </Box>
        </CardContent>
      </Card>

      {
        chapterData?.next && (
          <Card className={classes.root} onClick={() => onTabChapter('next')}>
            <CardContent className={classes.content}>
              <Box>
                <Typography fontSize={{xs: '8px', sm: '12px'}}>下一章</Typography>
                <Typography fontSize={{xs: '12px', sm: '18px'}}>{t(formatChapterTitle(chapterData?.next))}</Typography>
              </Box>
              <Box fontSize={"8px"}>
                <svg width="27" height="16" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 9C0.447715 9 0 8.55228 0 8C0 7.44772 0.447715 7 1 7L1 9ZM26.7071 7.29289C27.0976 7.68342 27.0976 8.31658 26.7071 8.70711L20.3431 15.0711C19.9526 15.4616 19.3195 15.4616 18.9289 15.0711C18.5384 14.6805 18.5384 14.0474 18.9289 13.6569L24.5858 8L18.9289 2.34315C18.5384 1.95262 18.5384 1.31946 18.9289 0.928932C19.3195 0.538408 19.9526 0.538408 20.3431 0.928932L26.7071 7.29289ZM1 7L26 7V9L1 9L1 7Z" fill="white"/>
                </svg>
              </Box>
            </CardContent>
          </Card>
        )
      }
    </Box>
  )
}

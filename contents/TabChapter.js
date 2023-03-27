
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
} from '@mui/material';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { makeStyles } from "@mui/styles";
import { ReadContext } from './context.js';
import arrowLeft from '../public/content/arrowLeft.svg';
import arrowRight from '../public/content/arrowRight.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#000000',
    // padding: theme.spacing(1),
    padding: '10px',
    height: '100px',
    width: '444px',
    cursor: 'pointer',
    borderRadius: '15px',
    '&.MuiCard-root:focus-within': {
      background: 'pink',
    },
    "&.Mui-selected": {
      background: "#3C3C3C",
      color: "#fff",
    },
    '&:hover': {
      backgroundImage: "linear-gradient(to right, #3162E8 0%, #3AD5E3 100%)",
    },
  },
  content: {
    color: "white",
    display: 'flex',
    justifyContent: "space-between",
    alignItems: "center",
  },
  }));

export default function TabChapter(props) {
	const contextData = useContext(ReadContext);
	const { readData, setReadData } = contextData;
	const { counter, unRead, currentIndex, actionFrom } = readData;
	console.log('contextData', contextData)

  const onPrevious = () => {

  };

  const onNext = () => {
		setReadData({counter, unRead: unRead + 1, currentIndex: currentIndex + 1, actionFrom: 'nextButton' })
  };

  const classes = useStyles();

  return (
    // 
    <Box display="flex" justifyContent="space-between"  {...props}>
      <Card className={classes.root} onClick={() => onPrevious()}>
        <CardContent className={classes.content}>
          <Box>
            <svg width="27" height="16" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26 9C26.5523 9 27 8.55228 27 8C27 7.44772 26.5523 7 26 7V9ZM0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM26 7L1 7V9L26 9V7Z" fill="white"/>
            </svg>
          </Box>
          <Box>
            <Typography>上一章</Typography>
            <Typography>1、1 区块链提高性能的尝试</Typography>
          </Box>
        </CardContent>
      </Card>

      <Card className={classes.root}>
        <CardContent className={classes.content}>

          <Box>
            <Typography>上一章</Typography>
            <Typography>1、1 区块链提高性能的尝试</Typography>
          </Box>
          <Box>
            <svg width="27" height="16" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 9C0.447715 9 0 8.55228 0 8C0 7.44772 0.447715 7 1 7L1 9ZM26.7071 7.29289C27.0976 7.68342 27.0976 8.31658 26.7071 8.70711L20.3431 15.0711C19.9526 15.4616 19.3195 15.4616 18.9289 15.0711C18.5384 14.6805 18.5384 14.0474 18.9289 13.6569L24.5858 8L18.9289 2.34315C18.5384 1.95262 18.5384 1.31946 18.9289 0.928932C19.3195 0.538408 19.9526 0.538408 20.3431 0.928932L26.7071 7.29289ZM1 7L26 7V9L1 9L1 7Z" fill="white"/>
            </svg>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}

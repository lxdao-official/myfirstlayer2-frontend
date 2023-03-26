import { useContext } from 'react';
import { Box, Typography, CircularProgress, LinearProgress } from '@mui/material';
import { makeStyles, withStyles } from '@mui/styles';

import { ReadContext } from './context.js';
import {
  setStorage,
  getStorage,
  removeStorage,
} from './storage.js'

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5
  },
  colorPrimary: {
    backgroundColor:
      theme.palette?.grey[theme.palette.type === "light" ? 200 : 700]
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#000"
  }
}))(LinearProgress);

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  // text: {
  //   transform: translateX(x);
  // }
});

export default function Progress() {
  const classes = useStyles();
  let x = 10;

  const { readData } = useContext(ReadContext);
  console.log('readData', readData);
  console.log('readData?.counter', readData?.counter);
  const { unRead, counter } = readData;

  return (
    <div className={classes.root}>
      {/* <Typography textAlign={{ md: }}>当前浏览进度</Typography> */}
      <BorderLinearProgress variant="determinate" value={(unRead / counter) * 100} />
      <Typography style={{transform: `translateX(${x}%)`, color: 'pink'}}>{ ((unRead / counter) * 100).toFixed(2)}%</Typography>
    </div>
  );
}


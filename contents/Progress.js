import { useContext } from 'react';

import {
  Box,
  CircularProgress,
  LinearProgress,
  Typography,
} from '@mui/material';
import { makeStyles, withStyles } from '@mui/styles';

import { ReadContext } from './context.js';
import { getStorage, removeStorage, setStorage } from './storage.js';

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
    color: theme.palette?.mode === 'dark' ? '#fff' : '#000',
  },
  colorPrimary: {
    backgroundColor: theme.palette?.mode === 'dark' ? '#4E4E4E' : '#AEAEAE',
  },
  bar: {
    borderRadius: 5,
    backgroundColor:
      theme.palette?.mode === 'dark' ? '#ffffff' : 'background: #000000',
  },
}))(LinearProgress);

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function Progress() {
  const classes = useStyles();
  let x = 10;

  const { readData } = useContext(ReadContext);
  console.log('readData', readData);
  console.log('readData?.counter', readData?.counter);
  const { unRead, counter } = readData;

  return (
    <Box className={classes.root}>
      <BorderLinearProgress
        variant="determinate"
        value={(unRead / counter) * 100}
      />
      <Typography style={{ transform: `translateX(${x}%)` }}>
        {((unRead / counter) * 100).toFixed(2)}%
      </Typography>
    </Box>
  );
}

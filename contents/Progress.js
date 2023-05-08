import { useContext } from 'react';

import { Box, CircularProgress, LinearProgress, Typography, useMediaQuery, useTheme } from '@mui/material';
import { makeStyles, withStyles } from '@mui/styles';

import { ReadContext } from './context.js';
import { getStorage, removeStorage, setStorage } from './storage.js';

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 4,
    borderRadius: 5,
    color: theme.palette?.mode === 'dark' ? '#fff' : '#000',
    fontStyle: 'SemiBold',
  },
  colorPrimary: {
    backgroundColor: theme.palette?.mode === 'dark' ? '#4E4E4E' : '#AEAEAE',
  },
  bar: {
    borderRadius: 5,
    backgroundColor: theme.palette?.mode === 'dark' ? '#ffffff' : 'background: #000000',
  },
}))(LinearProgress);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    fontStyle: 'SemiBold',
    fontWeight: 700,
    color: theme.palette?.mode === 'dark' ? '#ffffff' : '#747474',
    // marginBottom: '18px',
    // textAlign: 'center',
  },
  data: {
    color: theme?.palette?.mode === 'dark' ? '#fff' : '#000',
  },
}));

export default function Progress() {
  const classes = useStyles();

  const { readData } = useContext(ReadContext);
  const { read, counter } = readData;
  let x = (read / counter) * 100;

  const th = useTheme();

  const mdScreen = useMediaQuery(th?.breakpoints?.up('md'));

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" mb="10px">
        <Box
          variant="progress"
          sx={{
            textAlign: mdScreen ? 'center' : 'left',
            fontSize: mdScreen ? '12px' : '8px',
          }}
        >
          当前浏览进度
        </Box>
        <Box style={{ fontSize: mdScreen ? '12px' : '8px' }}>{x.toFixed(2)}%</Box>
      </Box>

      <BorderLinearProgress variant="determinate" value={x} />
    </Box>
  );
}

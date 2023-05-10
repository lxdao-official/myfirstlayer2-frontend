import { useContext } from 'react';

import { Box, LinearProgress, useMediaQuery, useTheme } from '@mui/material';
import { makeStyles, withStyles } from '@mui/styles';

import { ReadContext } from './context.js';

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
    fontWeight: 400,
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
    <Box className={classes.root}>
        <Box
          variant="progress"
          className={classes.title}
          sx={{
            marginBottom: mdScreen ? '9px' : '6px',
            fontSize: mdScreen ? '12px' : '8px',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Box>
            阅读进度
          </Box>
          {
            mdScreen && (
              <Box>
                {x}%
              </Box>
            )
          }
        </Box>
   
      <BorderLinearProgress variant="determinate" value={x} />
      {
        !mdScreen && (
          <Box className={classes.data} style={{ transform: `translateX(${x}%)`, fontSize: '10px' }}>
            {x.toFixed(2)}%
          </Box>
        )
      }
    </Box>
  );
}

import { Box, Typography, CircularProgress, LinearProgress } from '@mui/material';

import { makeStyles, withStyles } from '@mui/styles';

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

  return (
    <div className={classes.root}>
      {/* <Typography textAlign={{ md: }}>当前浏览进度</Typography> */}
      <BorderLinearProgress variant="determinate" value={x} />
      <Typography style={{transform: `translateX(${x}%)`, color: 'pink'}}>26%</Typography>
    </div>
  );
}


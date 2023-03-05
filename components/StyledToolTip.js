import React from 'react';
import { makeStyles } from '@mui/styles';
import { Tooltip } from '@mui/material';

const useStyles = makeStyles({
  tooltip: {
    marginTop: '10px !important',
    background: 'transparent',
  },
});

export default function StyledToolTip(props) {
  const classes = useStyles();
  return <Tooltip classes={{ tooltip: classes.tooltip }} {...props} />;
}

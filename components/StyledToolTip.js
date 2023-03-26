import React from 'react';

import { Tooltip } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  tooltip: {
    marginTop: '10px !important',
    background: 'transparent',
    borderRadius: '18px',
  },
});

export default function StyledToolTip(props) {
  const classes = useStyles();
  return <Tooltip classes={{ tooltip: classes.tooltip }} {...props} />;
}

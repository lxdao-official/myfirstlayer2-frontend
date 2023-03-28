import React from 'react';

import { Tooltip } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => {
  return {
    tooltip: (props) => ({
      marginTop: '10px !important',
      background: props.background,
      borderRadius: '18px',
      boxShadow: props.boxShadow,
    }),
    arrow: (props) => ({
      color: '#fff',
      fontSize: 16,
      margin: 0,
      '&[data-popper-placement*="top"] $arrow': {
        bottom: '-0.7em',
        '&::before': {
          borderWidth: '0.7em 0.7em 0 0',
          backgroundColor: props.background,
        },
      },
    }),
  };
});

export default function StyledToolTip(props) {
  const classes = useStyles(props);
  return (
    <Tooltip
      arrow
      classes={{
        tooltip: classes.tooltip,
        arrow: classes.arrow,
      }}
      {...props}
    />
  );
}

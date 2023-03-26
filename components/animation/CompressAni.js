import { animated, useTrail } from '@react-spring/web';
import { useState } from 'react';

import { Button, Stack, Typography } from '@mui/material';

export default function CompressAni() {
  const [clicks, setClicks] = useState(Array(3).fill(false));
  const zeros = [
    useTrail(
      10,
      () => ({
        from: {
          opacity: 1,
          transform: 'translateY(0px)',
          display: 'inline-block',
          width: '10px',
        },
      }),
      []
    ),
    useTrail(
      8,
      () => ({
        from: {
          opacity: 1,
          transform: 'translateY(0px)',
          display: 'inline-block',
          width: '10px',
        },
      }),
      []
    ),
    useTrail(
      8,
      () => ({
        from: {
          opacity: 1,
          transform: 'translateY(0px)',
          display: 'inline-block',
          width: '10px',
        },
      }),
      []
    ),
  ];
  const fromAnimation = {
    opacity: 1,
    transform: 'translateY(0px)',
    display: 'inline-block',
    width: '10px',
  };

  const toAnimation = { opacity: 0, transform: 'translateY(10px)', width: '0' };

  const defaultAnimationConfig = {
    from: fromAnimation,
    to: toAnimation,
  };
  const resetAnimationConfig = {
    form: toAnimation,
    to: fromAnimation,
  };

  const handleCompress = () => {
    for (let i = 0; i < clicks.length; i++) {
      if (!clicks[i]) {
        let newClick = [...clicks];
        newClick[i] = true;
        setClicks(newClick);
        zeros[i][1].start(defaultAnimationConfig);
        return;
      }
    }

    handleReset();
  };

  const handleReset = () => {
    setClicks(Array(3).fill(false));
    zeros.map((ele) => {
      ele[1].start({ to: fromAnimation, from: toAnimation });
    });
  };

  return (
    <Stack>
      <Typography>
        123
        {zeros[0][0].map((props) => (
          // eslint-disable-next-line react/jsx-key
          <animated.span style={props}>0</animated.span>
        ))}
        456
        {zeros[1][0].map((props) => (
          // eslint-disable-next-line react/jsx-key
          <animated.span style={props}>0</animated.span>
        ))}
        789
        {zeros[2][0].map((props) => (
          // eslint-disable-next-line react/jsx-key
          <animated.span style={props}>0</animated.span>
        ))}
        0
      </Typography>

      <Button variant="contained" onClick={handleCompress}>
        Compress
      </Button>
      <Button variant="contained" onClick={handleReset} sx={{ mt: 1 }}>
        Reset
      </Button>
    </Stack>
  );
}

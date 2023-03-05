import React from 'react';
import { Box, Typography } from '@mui/material';

export default function SectionFooter() {
  return (
    <Box padding={{ xs: 6, sm: 10 }} borderTop="2px solid #eee">
      <Typography
        variant={'h6'}
        component={'p'}
        color={'text.secondary'}
        align={'center'}
      >
        Myfirstlayer2 made by LXDAO Team
      </Typography>
    </Box>
  );
}

import React from 'react';

import { Box, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';

export default function SectionFooter() {
  return (
    <Box
      padding={{ xs: 3, sm: 3 }}
      display="flex"
      justifyContent={'center'}
      sx={{
        height: '80px',
        flexWrap: { xs: 'wrap', sm: 'noWrap' },
        rowGap: '20px',
      }}
    >
      <Typography
        component={'p'}
        color="text.third"
        align={'center'}
        fontWeight={400}
        fontSize={'20px'}
        sx={{ zoom: { xs: 0.5, sm: 1 }, width: { xs: '60%', sm: 'auto' } }}
        lineHeight={{ xs: '10px', sm: '32px' }}
      >
        Myfirstlayer2 made by LXDAO Team
      </Typography>
      <Divider
        orientation="vertical"
        sx={{
          borderColor: '#DADADA',
          height: '21px',
          marginTop: '5px',
          marginInline: { xs: '5px', sm: '88px' },
          display: { xs: 'none', sm: 'block' },
        }}
      />
      <Typography
        component={'p'}
        color="text.third"
        align={'center'}
        fontWeight={400}
        fontSize={'20px'}
        sx={{ zoom: { xs: 0.5, sm: 1 }, width: { xs: '40%', sm: 'auto' } }}
        lineHeight={{ xs: '10px', sm: '32px' }}
      >
        MIT@2023
      </Typography>
      <Divider
        orientation="vertical"
        sx={{
          borderColor: '#D9D9D9',
          height: '21px',
          marginTop: '5px',
          marginInline: { xs: '5px', sm: '88px' },
          display: { xs: 'none', sm: 'block' },
        }}
      />
      <Typography
        component={'p'}
        color="text.third"
        align={'center'}
        fontWeight={400}
        fontSize={'20px'}
        sx={{ zoom: { xs: 0.5, sm: 1 }, width: { xs: '60%', sm: 'auto' } }}
        lineHeight={{ xs: '10px', sm: '32px' }}
      >
        Project on Github
      </Typography>
      <Divider
        orientation="vertical"
        sx={{
          borderColor: '#DADADA',
          height: '18px',
          marginTop: '5px',
          marginInline: { xs: '20px', sm: '88px' },
          display: { xs: 'none', sm: 'block' },
        }}
      />
      <Typography
        component={'p'}
        color="text.third"
        align={'center'}
        fontWeight={400}
        fontSize={'20px'}
        sx={{ zoom: { xs: 0.5, sm: 1 }, width: { xs: '40%', sm: 'auto' } }}
        lineHeight={{ xs: '10px', sm: '32px' }}
      >
        Donate
      </Typography>
    </Box>
  );
}

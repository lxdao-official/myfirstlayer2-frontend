import React from 'react';
import { Box, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';

export default function SectionFooter() {
  return (
    <Box padding={{ xs: 6, sm: "40px" }} display="flex" justifyContent={"center"} borderTop="2px solid #eee"
      sx={{

        backgroundColor: '#000',
        height: '113px'

      }}
    >
      <Typography
        variant={'h6'}
        component={'p'}
        color="rgba(255, 255, 255, 0.85)"
        align={'center'}
        fontWeight={400}
        fontSize="20px"
        lineHeight="32px"
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
        variant={'h6'}
        component={'p'}
        color="rgba(255, 255, 255, 0.85)"
        align={'center'}
        fontWeight={400}
        fontSize="20px"
        lineHeight="32px"
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
        variant={'h6'}
        component={'p'}
        color="rgba(255, 255, 255, 0.85)"
        align={'center'}
        fontWeight={400}
        fontSize="20px"
        lineHeight="32px"
      >
        Project on Github
      </Typography>
      <Divider
        orientation="vertical"
        sx={{
          borderColor: '#DADADA',
          height: '18px',
          marginTop: '5px',
          marginInline: { xs: '5px', sm: '88px' },
          display: { xs: 'none', sm: 'block' },
        }}
      />
      <Typography
        variant={'h6'}
        component={'p'}
        color="rgba(255, 255, 255, 0.85)"
        align={'center'}
        fontWeight={400}
        fontSize="20px"
        lineHeight="32px"
      >
        Donate
      </Typography>
    </Box >
  );
}

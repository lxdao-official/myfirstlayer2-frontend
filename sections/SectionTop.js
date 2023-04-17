import { useLocale, useTranslations } from 'next-intl';
import React from 'react';

import { Box, Link, Typography } from '@mui/material';

import Container from '../components/Container';

export default function SectionTop({ content, meta }) {
  const t = useTranslations('Index');

  return (
    <Box sx={{ backgroundImage: 'url(/assets/top-day.png)', backgroundPosition: 'center' }} width="100%" color="#ffffff" height={'860px'}>
      <Box sx={{ backgroundPosition: 'center', background: 'linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.79) 42.71%, rgba(0, 0, 0, 0) 100%)' }} width="100%" color="#ffffff" height={'860px'}>
        <Container id="top-section" margin="0 auto" paddingY={'100px'}>
          <Typography
            sx={{
              textTransform: 'uppercase',
              fontSize: { xs: '70px', md: '90px' },
              fontWeight: '800',
              whiteSpace: 'pre-wrap',
              lineHeight: { xs: '70px', md: '100px' },
            }}
          >
            {t('title')}
          </Typography>

          <Typography
            sx={{
              mt: '50px',
              fontWeight: '400',
              color: 'text.primary',
              fontSize: '20px',
              color: 'white',
              whiteSpace: 'pre-line',
            }}
          >
            {t('description')}
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

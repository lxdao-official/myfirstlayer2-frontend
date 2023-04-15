import { useLocale, useTranslations } from 'next-intl';
import React from 'react';

import { Box, Link, Typography } from '@mui/material';

import Container from '../components/Container';

export default function SectionTop({ content, meta }) {
  const t = useTranslations('Index');

  return (
    <Container id="top-section">
      <Link id="introduce" sx={{ position: 'relative', top: '-80px' }}></Link>
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
      <Box component="img" src="/images/top-background.png" my={'30px'} width={'100%'} borderRadius={'16px'} />
      <Typography
        sx={{
          fontWeight: '400',
          color: 'text.primary',
          fontSize: '20px',
          whiteSpace: 'pre-line',
        }}
      >
        {t('description')}
      </Typography>
    </Container>
  );
}

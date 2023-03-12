import { Box, Typography, Grid } from '@mui/material';
import React from 'react';

import Container from '../components/Container';
import { useTranslations, useLocale } from 'next-intl';

export default function SectionTop({ content, meta }) {
  const t = useTranslations('Index');

  return (
    <Container id="top-section">
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
      <Box
        component="img"
        src="/images/top-background.png"
        my={'30px'}
        width={'100%'}
        borderRadius={'16px'}
      />
      <Typography
        sx={{ fontWeight: '400', fontSize: '20px', whiteSpace: 'pre-line' }}
      >
        {t('description')}
      </Typography>
    </Container>
  );
}

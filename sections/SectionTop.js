import { Box, Typography, Grid } from '@mui/material';
import React from 'react';

import Container from '../components/Container';
import { useTranslations, useLocale } from 'next-intl';

export default function SectionTop({ content, meta }) {
  const t = useTranslations('Index');

  return (
    <Box id="top-section">
      <Container>
        <Box position="relative" borderRadius={10} margin="0 auto">
          This is top
        </Box>
      </Container>
    </Box>
  );
}

import { useLocale, useTranslations } from 'next-intl';
import React from 'react';
import { Box, Link, Typography } from '@mui/material';


import Container from '../components/Container';

export default function SectionTop({ content, meta }) {
  const t = useTranslations('Index');

  return (
    <Container maxWidth="100%" paddingX={0} marginTop={10} id="top-section">
      <Link id="introduce" sx={{ position: 'relative', top: '-80px' }}></Link>
      <Box
        sx={{
          height: { xs: '70px', md: '912px' },
          background: 'url(/images/top-background.svg)',
          backgroundSize: 'cover',
        }}
      >
        <Typography
          sx={{
            paddingTop: '157px',
            margin: 'auto',
            width: { xs: '390px', md: '1200px' },
            textTransform: 'uppercase',
            fontSize: { xs: '70px', md: '90px' },
            fontWeight: '800',
            whiteSpace: 'pre-wrap',
            color: '#fff',
            lineHeight: { xs: '70px', md: '100px' },
          }}
        >
          WELCOME TO
        </Typography>
        <Typography
          sx={{
            margin: 'auto',
            width: { xs: '390px', md: '1200px' },
            textTransform: 'uppercase',
            fontSize: { xs: '70px', md: '90px' },
            fontWeight: '800',
            whiteSpace: 'pre-wrap',
            color: '#fff',
            lineHeight: { xs: '70px', md: '100px' },
          }}
        >
          MY FIRST LAYER2.
        </Typography>
        <Typography sx={{ paddingTop: '96px', margin: 'auto', width: { xs: '390px', md: '1200px' }, color: '#fff', fontWeight: '400', fontSize: '20px', whiteSpace: 'pre-line' }}>{t('description1')}</Typography>
        <Typography sx={{ margin: 'auto', width: { xs: '390px', md: '1200px' }, color: '#fff', fontWeight: '400', fontSize: '20px', whiteSpace: 'pre-line' }}>{t('description2')}</Typography>
        <Typography sx={{ margin: 'auto', width: { xs: '390px', md: '1200px' }, color: '#fff', fontWeight: '400', fontSize: '20px', whiteSpace: 'pre-line' }}>{t('description3')}</Typography>
      </Box>
    </Container>
  );
}

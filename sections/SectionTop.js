import { useLocale, useTranslations } from 'next-intl';
import React from 'react';

import { Box, Link, Typography } from '@mui/material';

import Container from '../components/Container';

export default function SectionTop({ content, meta }) {
  const t = useTranslations('Index');

  return (
    <Container maxWidth="100%" paddingX={0} marginTop="60px" id="top-section">
      <Link id="introduce" sx={{ position: 'relative', top: '-60px' }}></Link>
      <Box
        sx={{
          height: { xs: '280px', md: '912px' },
          background: 'url(/images/top-background.svg)',
          backgroundSize: 'cover',
        }}
      >
        <Typography
          sx={{
            paddingTop: { xs: '20px', md: '147px' },
            margin: 'auto',
            width: { xs: '323px', md: '1200px' },
            textTransform: 'uppercase',
            fontSize: { xs: '30px', md: '72px' },
            fontWeight: '800',
            whiteSpace: 'pre-wrap',
            color: '#fff',
            lineHeight: { xs: '40px', md: '84px' },
          }}
        >
          WELCOME TO
        </Typography>
        <Typography
          sx={{
            margin: 'auto',
            width: { xs: '323px', md: '1200px' },
            textTransform: 'uppercase',
            fontSize: { xs: '30px', md: '72px' },
            fontWeight: '800',
            whiteSpace: 'pre-wrap',
            color: '#fff',
            lineHeight: { xs: '40px', md: '84px' },
          }}
        >
          MY FIRST LAYER2.
        </Typography>
        <Typography sx={{ display: { xs: 'block', md: 'none' }, paddingTop: '20px', fontFamily: 'Alibaba PuHuiTi', margin: 'auto', letterSpacing: '0.5px', width: { xs: '323px', md: '1200px' }, color: '#D4D4D4', fontWeight: '400', fontSize: { xs: '10px', md: '20px' }, whiteSpace: 'pre-line' }}>
          {t('description2')}
        </Typography>

        <Typography sx={{ display: { xs: 'none', md: 'block' }, paddingTop: '32px', fontFamily: 'Alibaba PuHuiTi', margin: 'auto', letterSpacing: '0.5px', width: { xs: '323px', md: '1200px' }, color: '#D4D4D4', fontWeight: '400', fontSize: { xs: '10px', md: '20px' }, whiteSpace: 'pre-line' }}>
          {t('description')}
        </Typography>

        <Box
          sx={{
            paddingTop: { xs: '20px', md: '80px' },
            margin: 'auto',
            width: { xs: '323px', md: '1200px' },
          }}
        >
          <Box
            sx={{
              boxSizing: 'border-box',
              width: { xs: '100px', md: '317px' },
              height: { xs: '20px', md: '60px' },
              background: '#000000',
              border: '1px solid #FFFFFF',
              borderRadius: { xs: '8px', md: '18px' },
              display: 'flex',
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: '10px', md: '20px' },
                fontWeight: '700',
                lineHeight: '20px',
                margin: 'auto',
                fontFamily: 'Open Sans',
              }}
            >
              <Link
                sx={{
                  textDecoration: 'none',
                  cursor: 'pointer',
                  color: '#fff',
                }}
                href="#content"
                target="_self"
              >
                Start Learning
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

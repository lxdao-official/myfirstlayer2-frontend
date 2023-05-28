import { useLocale, useTranslations } from 'next-intl';
import React from 'react';
import styled from 'styled-components';

import { Box, Link, Typography } from '@mui/material';

import Container from '../components/Container';

const HightlightText = styled.span`
  background-image: linear-gradient(#3266e8, #3bd5e4);
  -webkit-background-clip: text;
  color: transparent;
`;

export default function SectionTop({ content, meta }) {
  const t = useTranslations('Index');
  const locale = useLocale();
  console.log('locale', locale);

  return (
    <Container maxWidth="100%" paddingX={0} id="top-section">
      <Link id="introduce" sx={{ position: 'relative' }}></Link>
      <Box
        sx={{
          height: { xs: '350px', md: 'calc(100vh - 60px)' },
          background: 'url(/images/top-background.png)',
          backgroundSize: 'cover',
        }}
      >
        <Box
          sx={{
            height: { xs: '350px', md: 'calc(100vh - 60px)' },
            background: 'linear-gradient(118.2deg, #000000 20.86%, rgba(0, 0, 0, 0.68) 57.97%, rgba(0, 0, 0, 0) 95.07%)',
          }}
        >
          <Typography
            sx={{
              paddingTop: { xs: '20px', md: '147px' },
              margin: 'auto',
              width: { xs: '323px', md: 'calc(100% - 472px)' },
              textTransform: 'uppercase',
              fontSize: { xs: '30px', md: '72px' },
              fontWeight: '700',
              whiteSpace: 'pre-wrap',
              color: '#fff',
              fontFamily: 'Hanson',
              lineHeight: { xs: '40px', md: '84px' },
            }}
          >
            WELCOME TO
          </Typography>
          <Typography
            sx={{
              margin: 'auto',
              width: { xs: '323px', md: 'calc(100% - 472px)' },
              textTransform: 'uppercase',
              fontSize: { xs: '30px', md: '72px' },
              fontWeight: '700',
              whiteSpace: 'pre-wrap',
              color: '#fff',
              fontFamily: 'Hanson',
              lineHeight: { xs: '40px', md: '84px' },
            }}
          >
            MY FIRST LAYER<HightlightText>2</HightlightText>.
          </Typography>
          <Typography
            sx={{
              display: { xs: 'block', md: 'none' },
              paddingTop: '20px',
              margin: 'auto',
              letterSpacing: '0.5px',
              width: { xs: '323px', md: 'calc(100% - 472px)' },
              color: '#D5D5D5',
              fontWeight: '400',
              fontSize: { xs: '10px', md: '16px' },
              lineHeight: locale == 'en' ? '16px' : '24px',
              whiteSpace: 'pre-line',
            }}
          >
            {t('description2')}
          </Typography>

          <Typography
            sx={{
              display: { xs: 'none', md: 'block' },
              paddingTop: '32px',
              margin: 'auto',
              letterSpacing: '0.5px',
              width: { xs: '323px', md: 'calc(100% - 472px)' },
              color: '#D5D5D5',
              fontWeight: '400',
              fontSize: { xs: '10px', md: '16px' },
              lineHeight: '24px',
              whiteSpace: 'pre-line',
            }}
          >
            {t('description')}
          </Typography>

          <Box
            sx={{
              paddingTop: { xs: '20px', md: '110px' },
              margin: 'auto',
              width: { xs: '323px', md: 'calc(100% - 472px)' },
            }}
          >
            <Box
              sx={{
                boxSizing: 'border-box',
                width: { xs: '108px', md: '243px' },
                height: { xs: '24px', md: '60px' },
                background: 'linear-gradient(to right,#3263E9,#3AD3E4)',
                borderRadius: { xs: '8px', md: '18px' },
                display: 'flex',
                padding: '1px',
              }}
            >
              <Box
                sx={{
                  boxSizing: 'border-box',
                  width: { xs: '108px', md: '241px' },
                  height: { xs: '22px', md: '58px' },
                  background: '#000000',
                  borderRadius: { xs: '8px', md: '18px' },
                  display: 'flex',
                  '&:hover': {
                    background: 'rgba(0, 0, 0, 0.12)',
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: '8px', md: '20px' },
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
                    {t('button')}
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

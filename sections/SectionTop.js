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
          height: { xs: '100%', md: '100vh' },
          background: 'url(/images/top-background.png)',
          backgroundSize: 'cover',
        }}
      >
        <Box
          sx={{
            height: { xs: '100%', md: '100vh' },
            alignItems: 'center',
            justifyContent:'start',
            flexDirection: 'column',
            display:'flex',
            background: 'linear-gradient(118.2deg, #000000 20.86%, rgba(0, 0, 0, 0.68) 57.97%, rgba(0, 0, 0, 0) 95.07%)',
          }}
        >
          <Box sx={{
            display:'flex',
            maxWidth:'1307px',
            width:'100%',
            px:'16px',
            flex:1,
            flexDirection:'column',
            // justifyContent:'center'
            }}> 
          <Typography
            sx={{
              paddingTop: { xs: '20px', md: '147px' },
              // width: { xs: '323px', md: 'calc(100% - 472px)' },
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
              // width: { xs: '323px', md: 'calc(100% - 472px)' },
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
              letterSpacing: '0.5px',
              // width: { xs: '323px', md: 'calc(100% - 472px)' },
              color: '#D5D5D5',
              fontWeight: '400',
              fontSize: { xs: '15px', md: '16px' },
              lineHeight: locale == 'en' ? {xs:'22.5px',md:'16px'} : '24px',
              whiteSpace: 'pre-line',
            }}
          >
            {t('description2')}
          </Typography>

          <Typography
            sx={{
              display: { xs: 'none', md: 'block' },
              paddingTop: '32px',
              letterSpacing: '0.5px',
              // width: { xs: '323px', md: 'calc(100% - 472px)' },
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
              // width: { xs: '323px', md: 'calc(100% - 472px)' },
            }}
          >
            <Box
              sx={{
                boxSizing: 'border-box',
                width:'243px' ,
                height:'60px',
                background: 'linear-gradient(to right,#3263E9,#3AD3E4)',
                borderRadius: { xs: '18px', md: '18px' },
                display: 'flex',
                padding: '1px',
                mb: '20px',
              }}
            >
              <Link
                sx={{
                  boxSizing: 'border-box',
                  width:'241px',
                  height:'58px',
                  background: '#000000',
                  borderRadius: { xs: '18px', md: '18px' },
                  display: 'flex',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  color: '#fff',
                  '&:hover': {
                    background: 'rgba(0, 0, 0, 0.12)',
                  },
                }}
                href="#content"
                target="_self"
              >
                <Typography
                  sx={{
                    fontSize: '20px' ,
                    fontWeight: '700',
                    lineHeight: '20px',
                    margin: 'auto',
                    // fontFamily: 'Open Sans',
                  }}
                >
                  {t('button')}
                </Typography>
              </Link>
            </Box>
          </Box>
          </Box>
          
        </Box>
      </Box>
    </Container>
  );
}

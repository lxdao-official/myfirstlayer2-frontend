import { useLocale, useTranslations } from 'next-intl';
import React from 'react';
import styled from 'styled-components';

import { Box, IconButton, Link, Typography } from '@mui/material';

import Container from '../components/Container';
import NewButton from '../components/NewButton';

const HightlightText = styled.span`
  background-image: linear-gradient(#3266e8, #3bd5e4);
  -webkit-background-clip: text;
  color: transparent;
`;

export default function SectionTop({ }) {
  const t = useTranslations('Index');
  const locale = useLocale();
  // console.log('locale', locale);

  return (
    <>
      < Link id="introduce" sx={{ position: 'relative' }}></Link >
      <Box
        sx={{
          display: 'flex',
          justifyContent: "center",
          width: '100vw',
          height: { xs: '100%', md: "100vh" },
          minHeight: { md: "830px" },
          background: { xs: 'no-repeat black right bottom/300px url(/bg-new.png)', md: 'no-repeat black right bottom/500px url(/bg-new.png)', lg: 'no-repeat black right bottom/40% url(/bg-new.png)' },
          py: "64px",
          mb: "40px"
        }}
      >
        <Box sx={{ display: 'flex', px: '16px', flexDirection: 'column', maxWidth: '1307px', width: '100%', height: '100%' }}>
          <Typography
            sx={{
              paddingTop: { xs: '20px', md: '147px' },
              fontSize: { xs: '36px', md: '68px' },
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
              fontSize: { xs: '36px', md: '68px' },
              fontWeight: '700',
              whiteSpace: 'pre-wrap',
              color: '#fff',
              fontFamily: 'Hanson',
              lineHeight: { xs: '40px', md: '84px' },
            }}
          >
            MY FIRST LAYER
            <Box component={"span"} sx={{
              backgroundImage: 'linear-gradient(#3266e8, #3bd5e4)',
              backgroundClip: "text",
              color: "transparent",
            }}>2</Box>
          </Typography>
          <Typography
            sx={{
              paddingTop: '32px',
              letterSpacing: '0.5px',
              // width: { xs: '323px', md: 'calc(100% - 472px)' },
              maxWidth: { xs: '470px', md: '800px' },
              color: '#5F6D7E',
              fontWeight: '400',
              fontSize: { xs: '16px', md: '18px' },
              lineHeight: '1.5',
              whiteSpace: 'pre-line',
            }}
          >
            {t('description')}
          </Typography>
          <Box sx={{ display: "flex", mt: '32px' }}>
            <Link href='#content' underline='none' target='_self'><NewButton>{t("button")}</NewButton></Link>
          </Box>
          <Box display="flex" gap={2} mt={8}>
            <Link href="https://twitter.com/LXDAO_Official" target="_blank">
              <Box component={'img'} src={'/icons/telegram-circle.svg'} />
            </Link>
            <Link href="https://twitter.com/LXDAO_Official" target="_blank">
              <Box component={'img'} src={'/icons/twitter-circle.svg'} />
            </Link>
            <Link href="https://discord.lxdao.io" target="_blank">
              <Box component={'img'} src={'/icons/discord-circle.svg'} />
            </Link>
          </Box>
        </Box>

      </Box >
    </>


  );
}

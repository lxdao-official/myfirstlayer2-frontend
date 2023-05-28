import { useLocale, useTranslations } from 'next-intl';
import React from 'react';
import { Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Box, Card, Grid, Link, Typography, useTheme } from '@mui/material';

import MyFirstArrow from '../components/svg/MyFirstArrow';
import SectionSimpleWrapper from './SectionSimpleWrapper';

function MyFirstCard(props) {
  const theme = useTheme();
  const t = useTranslations('SectionMyFirstProject');
  return (
    <Box
      width={1}
      height={1}
      sx={{
        textDecoration: 'none',
        paddingBottom: { xs: 0, md: '50px' },
        borderRadius: { xs: '8px', md: '18px' },
      }}
    >
      <Box
        width={1}
        height={1}
        display={'flex'}
        flexDirection={'column'}
        sx={{
          backgroundColor: '#FAFAFA',
          borderRadius: { xs: '8px', md: '18px' },
          height: { xs: '290px', md: '410px' },
          padding: { xs: '10px', md: '20px' },
          '&:hover': {
            boxShadow: { xs: 'none', md: theme.palette.shadow.level1 },
          },
        }}
      >
        <Box display="flex" flexDirection={'row'}>
          <Box
            component={Card}
            width={{ xs: '40px', md: '80px' }}
            height={{ xs: '40px', md: '80px' }}
            borderRadius="50%"
            boxShadow="none"
            display={'flex'}
            flexDirection={'column'}
            sx={{
              backgroundImage: 'none',
              background: '#fff',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              component="img"
              src={props.image}
              title={props.projectName}
              sx={{
                width: { xs: '28px', md: '56px' },
              }}
            />
          </Box>
          <Box display={'flex'} ml="10px" justifyContent="start" flex="1">
            <Box boxShadow="none" display={'flex'} flexDirection={'column'}>
              <Typography color="text.primary" fontSize={{ xs: '15px', md: '24px' }} whiteSpace="nowrap" fontWeight={800}>
                {props.projectName}
              </Typography>
              <Typography color="#676767" fontSize={{ xs: '8px', md: '12px' }} fontWeight={400}>
                {props.holder}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          marginTop={{ xs: '10px', md: '20px' }}
          component="img"
          src={props.bigImage}
          title={props.title}
          sx={{
            width: '100%',
            borderRadius: '15px',
            filter: props.theme.palette?.mode === 'dark' ? 'brightness(0.7)' : 'none',
          }}
        />
        <Box marginTop={{ xs: '10px', md: '20px' }} marginBottom={{ xs: '10px', md: '15px' }}>
          <Typography color="text.primary" fontSize={'12px'} fontWeight={400} fontFamily="Open Sans">
            {props.description}
          </Typography>
        </Box>

        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Link
            color="text.primary"
            target="_blank"
            href={props.url}
            display="flex"
            justifyContent="flex-end"
            sx={{
              textDecoration: 'none',
            }}
          >
            <Typography color="text.primary" fontSize={'12px'} fontWeight={600} fontFamily="Open Sans">
              {t('view-more')}
            </Typography>
            <Box color="text.primary" marginLeft={'10px'} width="19px">
              <MyFirstArrow color="text.primary" />
            </Box>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default function SectionMyFirstProject() {
  const theme = useTheme();
  const t = useTranslations('SectionMyFirstProject');
  const locale = useLocale();
  const myfirstProjects = {
    zh: [
      {
        projectName: 'My First NFT',
        holder: '666 holder',
        image: '/project/myfirstnft.png',
        bigImage: '/project/myfirstnftCard.png',
        description: 'MyFirstNFT 是一个针对 Web3 新手的非营利性教学项目。 在学习 Web3、NFT 的潜在价值和安全原则的同时获得免费的 NFT。',
        url: 'https://myfirstnft.info/',
      },
      {
        projectName: 'EIPs Fun',
        holder: '',
        image: '/project/eipsfun.png',
        bigImage: '/project/eipsfunCard.png',
        description: 'EIPs Fun 是一个让 EIP 变得有趣且易于被开发者采用并促进 EIP 生态系统发展的项目。',
        url: 'https://eips.fun/',
      },
    ],
    en: [
      {
        projectName: 'My First NFT',
        holder: '666 holder',
        image: '/project/myfirstnft.png',
        bigImage: '/project/myfirstnftCard.png',
        description: 'MyFirstNFT is a non-profit instructional project for Web3 newbies. Get a FREE NFT while learning about Web3, underlying values of NFT, and security principles.',
        url: 'https://myfirstnft.info/',
      },
      {
        projectName: 'EIPs Fun',
        holder: '',
        image: '/project/eipsfun.png',
        bigImage: '/project/eipsfunCard.png',
        description: 'EIPs Fun is a project for making EIPs fun and easy to be adopted by buidlers and advancing EIP ecosystem development.',
        url: 'https://eips.fun/',
      },
    ],
  };
  return (
    <SectionSimpleWrapper marginTop={{ xs: 6.875, sm: '120px' }} paddingTop="51px" background="#fff" title={t('sectionMyFirst-title-1')} desc={t('sectionMyFirst-title-2')} childOverflow="visible" id="project">
      <Box padding={{ xs: 2, sm: 0 }} marginTop={{ xs: 0, sm: '50px' }} paddingBottom={{ xs: 0, sm: '48px' }}>
        <Grid sx={{ display: { sm: 'flex', xs: 'none' } }} justifyContent="center" container spacing={{ xs: 3.125, sm: 2 }}>
          {myfirstProjects[locale].map((item, i) => (
            <Grid rowGap="25px" item xs={12} sm={6} md={4} key={i}>
              <MyFirstCard theme={theme} {...item} />
            </Grid>
          ))}
        </Grid>
        <Grid sx={{ display: { sm: 'none', xs: 'flex' } }} container spacing={{ xs: '15px' }}>
          <Swiper
            style={{ marginLeft: '15px', height: '320px' }}
            slidesPerView={1.53}
            centeredSlides={false}
            spaceBetween={15}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            {myfirstProjects[locale].map((item, i) => (
              <SwiperSlide key={i}>
                <MyFirstCard theme={theme} {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Box>
    </SectionSimpleWrapper>
  );
}

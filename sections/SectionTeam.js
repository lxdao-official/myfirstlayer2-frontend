import { useTranslations } from 'next-intl';
import React from 'react';

import { Box, Card, CardContent, Grid, Link, Tooltip, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import Twitter from '../components/svg/Twitter';
import SectionSimpleWrapper from './SectionSimpleWrapper';

const coreContributors = [
  {
    image: '/teams/brucexu.eth.png',
    description: 'I wish to be an interesting piece of code in your metaverse.',
    name: 'brucexu.eth',
    twitter: 'https://twitter.com/brucexu_eth',
  },

  {
    image: '/teams/kasoqian.jpg',
    description: 'Web3 BUIDLER and BELIEVER! Creator of GuoChanLiangXin and MyFirstNFT. Member @theNextDAO. Core contributor @GCLX community.',
    name: 'kasoqian',
    twitter: 'https://twitter.com/kasoqian_eth',
  },
  {
    image: '/teams/LouisWang.jpg',
    description: 'Web3 BUIDLER. Artist of GuoChanLiangXin. Member @theNextDAO. 💎  hand.  Core contributor @GCLX community.',
    name: 'LouisWang',
    twitter: 'https://twitter.com/lviswang',
  },
  {
    image: '/teams/0xCryptolee.jpg',
    description: 'A Web2 developer with more than 10 years of experience. Now, looking for some fun in Web3.0. Call me John 或者老高. Member @GCLX community.',
    name: '0xCryptolee',
    twitter: 'https://twitter.com/IpfSxian',
  },
  {
    image: '/teams/0xhardman.jpg',
    description: 'Web3 believer and builder | Loving to try something new | Inspired to become a digital nomad | Member of BUPT3',
    name: '0xhardman.eth',
    twitter: 'https://twitter.com/0xhardman',
  },
  {
    image: '/teams/AnImpro.jpg',
    description: 'Core Contributor @theNextDAO.',
    name: 'AnImpro',
    twitter: 'https://twitter.com/0xAnImpro',
  },
  {
    image: '/teams/kahn.jpeg',
    description: 'BUIDLER, Surfer, Burner and Dreamer. Mod @theNextDAO. Lost somewhere in Web3.',
    name: 'kahn',
  },
  {
    image: '/teams/Jacky.png',
    description: "A newcomer to Web3. Let's connect and do something fun together! 3n4.pps.eth coming soon☝🏻",
    name: 'Jacky',
    twitter: 'https://twitter.com/jacky_luxue',
  },
  {
    image: '/teams/Samo.png',
    description: 'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
    name: 'Samo',
    twitter: 'https://twitter.com/BirkSamo',
  },
  {
    image: '/teams/zircon.png',
    description: 'Designer, Crypto & NFT fans',
    name: 'zircon',
    twitter: 'https://twitter.com/the_crypto101',
  },
  {
    image: '/teams/huahua.jpg',
    description: 'Web3 designer and fanart artist.',
    name: 'huahua',
  },
  {
    image: '/teams/cherryyang.jpg',
    description: 'She/Her. Web3 BUIDLER. Rug-pull Addict.',
    name: 'cherryyang',
    twitter: 'https://twitter.com/cherry_yang_cn',
  },
  {
    image: '/teams/zpan.png',
    description: 'She/Her. Web3 BUIDLER. Rug-pull Addict.',
    name: 'zpan',
    twitter: 'https://twitter.com/0zpan',
  },
  {
    image: '/teams/Dyson.png',
    description: 'Moonwalker @theNextDAO.',
    name: 'Dyson',
    twitter: 'https://twitter.com/Dysonisme',
  },
  {
    image: '/teams/JayK.jpg',
    description: 'Front-end developer/solidity, beginner/Web3 rover.',
    name: 'JayK',
  },
  {
    image: '/teams/0x1998.jpg',
    description: 'Fullstack developer / Web3 builder / I have a dream.',
    name: '0x1998',
    twitter: 'https://twitter.com/0x1998',
  },
];

const activeContributors = [
  {
    image: '/team/smrtfish.jpeg',
    description: 'Felt emo might brew coffee.',
    name: 'smrtfish',
    twitter: 'https://twitter.com/smrtfish',
  },
  {
    image: '/team/jojo.jpeg',
    description: 'Web3 believer Mod @My First NFT and @X Rabbits Club.',
    name: 'jojo',
    twitter: 'https://twitter.com/xuanma2022',
  },
  {
    image: '/team/dt.jpg',
    description: 'GCLX #711 | Muri #4774 | Fireworks Igniter Di (地) Tui (推) means selling things one by one face to face. This is my way to promote Web3 and my job to earn a living.',
    name: 'DT.acheng',
    twitter: 'https://twitter.com/cryptoacheng',
  },
  {
    image: '/team/liuche.jpeg',
    description: 'The man is lazy and nothing is left.',
    name: 'liuche.eth',
    mirror: 'https://mirror.xyz/liuche.eth',
  },
  {
    image: '/team/daniaoren.jpeg',
    description: 'Web3 resident. Builder, trader and gamer.',
    name: 'daniaoren',
    twitter: 'https://twitter.com/daniaoren',
  },
  {
    image: '/team/Marvin.jpeg',
    description: 'Web2 Coder, Web3 Player. Crypto Mindset & Education.CFD trader.',
    name: 'Marvin',
    twitter: 'https://twitter.com/FlyFlyyeah',
  },
  {
    image: '/team/fencun.jpg',
    description: 'Half a year A7-A4 web3 Connecting plate expert. Proficient in loss investment logic. If you have too much money, please contact me to help you lose it',
    name: 'Fencun',
    twitter: 'https://twitter.com/Fencun_nft',
  },
  {
    image: '/team/mz.jpg',
    description: 'A Web2 game developer and engineer trainer with more than 10 years of experience. Now, looking for some fun such as Generative Art in Web3. Call me Michael.',
    name: 'Michael Zhu',
    twitter: 'https://twitter.com/artgeek_eth',
  },
  {
    image: '/team/chris.jpg',
    description: 'Five-year-old leek, a fan of NFTs and games, now working as a farmer in Thailand.0dao.',
    name: '0-dao.eth',
    twitter: 'https://www.twitter.com/0d_chao',
  },
  {
    image: '/team/nakke.png',
    description: 'GCLX community contributor | exploring Web3 by night | ultra-marathon runner | 7 continents | Carnegie Mellon | father & husband | mfer | 🇨🇳 🇺🇸 🇭🇰.',
    name: 'nakke',
    twitter: 'https://twitter.com/Nakostoyevsky',
  },
  {
    image: '/team/nathalia.jpeg',
    description: 'A Web2 Operation & MKT with more than 4 years of experiences. Sometime @NexDAO mod. Call me Nathalia~',
    name: 'Nathalia',
    twitter: 'https://twitter.com/ayanyu09',
  },
  {
    image: '/team/kuncle.png',
    description: '#Web3 Builder | Data Expert at #Crypto #Exchanges | Early Member @theNextDAO | Work in #Singapore',
    name: 'Kuncle',
    twitter: 'https://twitter.com/KingsUncle1',
  },
  {
    image: '/team/yanyan.jpg',
    description: 'A Web2 legal counsel, maybe also a Web3 KOL for nothing and a real believer in CC0.',
    name: 'Yanyan',
    twitter: 'https://twitter.com/seki_maruko',
  },
  {
    image: '/team/skyler.jpeg',
    description: 'A Web2 developer with more than 10 years of experience. Now, looking for some fun in Web3. Call me Skyler.',
    name: 'skyler',
    twitter: 'https://twitter.com/VerySkyler',
  },
  {
    image: '/team/justVic.jpeg',
    description: 'Contributor @theNextDAO, Web3 student',
    name: 'justVic',
    twitter: 'https://twitter.com/virackt',
  },
  {
    image: '/team/lidonghao.png',
    description: '#Web3 Studen | Member @theNextDAO',
    name: 'lidonghao.eth',
    twitter: 'https://twitter.com/lidonghao1116',
  },
  {
    image: '/team/wesh.jpg',
    description: 'NFT trader & collector. Web3 apprentice.',
    name: 'wesh.eth',
    twitter: 'https://twitter.com/mekawesh',
  },
  {
    image: '/team/highfar.png',
    description: 'Member @theNextDAO',
    name: 'Highfar',
    twitter: 'https://twitter.com/highfar1988',
  },
  {
    image: '/team/yixinrock.jpg',
    description: 'NFT Arbitrager, Web3 Developer.',
    name: 'yixinrock',
    twitter: 'https://twitter.com/yixinrock_',
  },
  {
    image: '/team/zeddy.png',
    description: 'Dreamer. Enjoy myself in Web3',
    name: 'Zeddy',
    twitter: 'https://twitter.com/Zeddy11Zeddy11',
  },
  {
    image: '/team/shenyu.jpeg',
    description: "Cofounder of F2Pool & Cobo. I'm ready to travel, the Bitcoin is my ticket",
    name: 'DiscusFish',
    twitter: 'https://twitter.com/bitfish1',
  },
  {
    image: '/team/sea.png',
    description: 'Core Contributor @theNextDAO // Web3 entrepreneur // NFT Advisor',
    name: '0xSea.eth',
    twitter: 'https://twitter.com/_0xSea',
  },
  {
    image: '/team/xing.jpeg',
    description: 'A Web2 developer with more than 10 years of experience. Now, looking for some fun in Web3. Call me Xing.',
    name: 'Xing',
    twitter: 'https://twitter.com/nelsonie',
  },
  {
    image: '/team/lili.jpeg',
    description: 'A newcomer to Web3. Life-long learner and full-time Mum.',
    name: 'Lili',
    twitter: '',
  },
  {
    image: '/team/yofine.jpeg',
    description: 'Web developer',
    name: 'yofine.eth',
    twitter: 'https://twitter.com/yofine2js',
  },
  {
    image: '/team/shanchao.jpeg',
    description: 'NFT man, Web3 worker',
    name: 'shanchao.wsc',
    twitter: 'https://twitter.com/sam48522931',
  },
  {
    image: '/team/kitty.jpg',
    description: "Don't Panic, Lead mod of @theNextDAO",
    name: 'Kitty',
    twitter: 'https://twitter.com/0xKitty_eth',
  },
];

function Contributor(props) {
  const theme = useTheme();
  const t = useTranslations('SectionTeam');
  return (
    <Box
      width={1}
      height={1}
      sx={{
        textDecoration: 'none',
      }}
    >
      <Box
        component={Card}
        width={1}
        height={1}
        boxShadow={1}
        display={'flex'}
        flexDirection={'column'}
        sx={{
          boxShadow: 'none',
          backgroundImage: 'none',
          backgroundColor: 'background.level3',
          borderRadius: { xs: '8px', sm: '18px' },
          height: { xs: '72px', sm: '160px' },
          width: { xs: '56px', sm: 'auto' },
        }}
      >
        <Box
          component="img"
          src={props.image}
          title={props.name}
          sx={{
            width: { xs: '56px', sm: '128px' },
            height: { xs: '56px', sm: '128px' },
            filter: theme.palette?.mode === 'dark' ? 'brightness(0.7)' : 'none',
          }}
        />
        <Box
          component={CardContent}
          position={'relative'}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: { xs: '15px 10px 10px 10px', sm: '15px 10px 24px 10px' },
            zoom: { xs: 0.5, sm: 1 },
            height: {
              xs: '16px !important',
              md: '32px !important',
            },
          }}
        >
          <Box display="flex" justifyContent="space-between" alignItems="center" height="16px" width={'100%'}>
            <Typography
              sx={{
                lineHeight: '16px',
              }}
              fontWeight={600}
              fontSize={{ xs: '12px', md: '13px' }}
            >
              {props.name}
            </Typography>
            {props.twitter && (
              <Link height="16px" target="_blank" href={props.twitter}>
                <Twitter height={{ xs: '16px', md: '16px' }} />
              </Link>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function SimpleContributor(props) {
  return (
    <Box
      width={1}
      height={1}
      sx={{
        textDecoration: 'none',
      }}
    >
      <Box component={Card} width={1} height={1} borderRadius="50%" boxShadow="none" display={'flex'} flexDirection={'column'} sx={{ backgroundImage: 'none', background: '#fff' }}>
        <Tooltip title={props.name}>
          <Box
            component="img"
            alt='avatar'
            src={props.image}
            sx={{
              width: '100%',
            }}
            loading='lazy'
          />
        </Tooltip>
      </Box>
    </Box>
  );
}

export default function SectionTeam() {
  const t = useTranslations('SectionTeam');
  return (
    <SectionSimpleWrapper title={t(`sectionTeam-content-11`)} desc={t('sectionTeam-title-12')} id="team">
      <Box padding={{ xs: 2, sm: '110px' }}>
        <Grid container spacing={2.5}>
          {coreContributors.map((item, i) => (
            <Grid
              sx={{ cursor: 'pointer' }}
              onClick={() => {
                if (item.twitter) {
                  window.open(item.twitter, '_blank');
                }
              }}
              item
              xs={12 / 7}
              sm={12 / 7}
              md={12 / 12}
              key={i}
            >
              <SimpleContributor {...item} />
            </Grid>
          ))}
        </Grid>
      </Box>

    </SectionSimpleWrapper>
  );
}

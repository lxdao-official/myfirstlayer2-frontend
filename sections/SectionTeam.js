import React from 'react';
import {
  Link,
  Card,
  Box,
  Typography,
  Grid,
  CardContent,
  CardActions,
} from '@mui/material';
import _ from 'lodash';
import { useTheme } from '@mui/material/styles';
import { useTranslations } from 'next-intl';
import StyledToolTip from '../components/StyledToolTip';
import SectionSimpleWrapper from './SectionSimpleWrapper';

const coreContributors = [
  {
    image: '/team/bruce.jpg',
    description:
      'Web3 BUIDLER and BELIEVER! Creator of GuoChanLiangXin and MyFirstNFT. Member @theNextDAO. Core contributor @GCLX community.',
    name: 'brucexu.eth',
    twitter: 'https://twitter.com/brucexu_eth',
  },
  {
    image: '/team/muxin.png',
    description:
      'Web3 BUIDLER. Artist of GuoChanLiangXin. Member @theNextDAO. 💎  hand.  Core contributor @GCLX community.',
    name: 'Muxin.eth',
    twitter: 'https://twitter.com/muxin_eth',
  },
  {
    image: '/team/john.jpg',
    description:
      'A Web2 developer with more than 10 years of experience. Now, looking for some fun in Web3.0. Call me John 或者老高. Member @GCLX community.',
    name: 'John',
    twitter: 'https://twitter.com/0xGao',
  },
  {
    image: '/team/shep.jpg',
    description: 'Core Contributor @theNextDAO.',
    name: 'shep.eth',
    twitter: 'https://twitter.com/shep_eth',
  },
  {
    image: '/team/neethan.jpeg',
    description:
      'BUIDLER, Surfer, Burner and Dreamer. Mod @theNextDAO. Lost somewhere in Web3.',
    name: 'nΞethan',
    twitter: 'https://twitter.com/neethanverse',
  },
  {
    image: '/team/3n4.png',
    description:
      "A newcomer to Web3. Let's connect and do something fun together! 3n4.pps.eth coming soon☝🏻",
    name: '3n4',
    twitter: 'https://twitter.com/I_am_Cheng_Kang',
  },
  {
    image: '/team/dissey.jpg',
    description:
      'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
    name: 'dissey',
  },
  {
    image: '/team/lyly.jpg',
    description: 'Designer, Crypto & NFT fans 😁 ✌️',
    name: 'lyly',
    twitter: 'https://twitter.com/lyly0x57',
  },
  {
    image: '/team/haha.jpeg',
    description: 'Web3 designer and fanart artist.',
    name: 'hahazwei',
    twitter: 'https://twitter.com/hahazwei',
  },
  {
    image: '/team/penny777.jpg',
    description: 'The Last Poet of the Crypto World.',
    name: 'Penny777',
    twitter: 'https://twitter.com/Penny777_eth',
  },
  {
    image: '/team/PolarBear.jpg',
    description: 'She/Her. Web3 BUIDLER. Rug-pull Addict.',
    name: 'PolarBear',
    twitter: 'https://twitter.com/BiPolar4ever_18',
  },
  {
    image: '/team/allen.png',
    description: 'Moonwalker @theNextDAO.',
    name: 'Satoshi Natsu',
    twitter: 'https://twitter.com/satoshi_natsu',
  },
  {
    image: '/team/entheo_eth.jpg',
    description: 'I wish to be an interesting piece of code in your metaverse.',
    name: 'entheo.eth',
  },
  {
    image: '/team/carver.jpg',
    description: 'Front-end developer/solidity, beginner/Web3 rover.',
    name: 'Carver',
  },
  {
    image: '/team/animpro.png',
    description: 'Whimsical ronin in Web3.',
    name: 'animpro.eth',
    twitter: 'https://twitter.com/0xAnImpro',
  },
  {
    image: '/team/D.jpg',
    description:
      "All in crypto. NFT degen. Build of Web3. Let's grow together.",
    name: 'genghao.eth',
    twitter: 'https://twitter.com/0xgenghao',
  },
  {
    image: '/team/yootou.png',
    description: 'Fullstack developer / Web3 builder / I have a dream.',
    name: 'yootou.eth',
    twitter: 'https://twitter.com/0xYootou',
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
    description:
      'GCLX #711 | Muri #4774 | Fireworks Igniter Di (地) Tui (推) means selling things one by one face to face. This is my way to promote Web3 and my job to earn a living.',
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
    description:
      'Web2 Coder, Web3 Player. Crypto Mindset & Education.CFD trader.',
    name: 'Marvin',
    twitter: 'https://twitter.com/FlyFlyyeah',
  },
  {
    image: '/team/fencun.jpg',
    description:
      'Half a year A7-A4 web3 Connecting plate expert. Proficient in loss investment logic. If you have too much money, please contact me to help you lose it',
    name: 'Fencun',
    twitter: 'https://twitter.com/Fencun_nft',
  },
  {
    image: '/team/mz.jpg',
    description:
      'A Web2 game developer and engineer trainer with more than 10 years of experience. Now, looking for some fun such as Generative Art in Web3. Call me Michael.',
    name: 'Michael Zhu',
    twitter: 'https://twitter.com/artgeek_eth',
  },
  {
    image: '/team/chris.jpg',
    description:
      'Five-year-old leek, a fan of NFTs and games, now working as a farmer in Thailand.0dao.',
    name: '0-dao.eth',
    twitter: 'https://www.twitter.com/0d_chao',
  },
  {
    image: '/team/nakke.png',
    description:
      'GCLX community contributor | exploring Web3 by night | ultra-marathon runner | 7 continents | Carnegie Mellon | father & husband | mfer | 🇨🇳 🇺🇸 🇭🇰.',
    name: 'nakke',
    twitter: 'https://twitter.com/Nakostoyevsky',
  },
  {
    image: '/team/nathalia.jpeg',
    description:
      'A Web2 Operation & MKT with more than 4 years of experiences. Sometime @NexDAO mod. Call me Nathalia~',
    name: 'Nathalia',
    twitter: 'https://twitter.com/ayanyu09',
  },
  {
    image: '/team/kuncle.png',
    description:
      '#Web3 Builder | Data Expert at #Crypto #Exchanges | Early Member @theNextDAO | Work in #Singapore',
    name: 'Kuncle',
    twitter: 'https://twitter.com/KingsUncle1',
  },
  {
    image: '/team/yanyan.jpg',
    description:
      'A Web2 legal counsel, maybe also a Web3 KOL for nothing and a real believer in CC0.',
    name: 'Yanyan',
    twitter: 'https://twitter.com/seki_maruko',
  },
  {
    image: '/team/skyler.jpeg',
    description:
      'A Web2 developer with more than 10 years of experience. Now, looking for some fun in Web3. Call me Skyler.',
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
    description:
      "Cofounder of F2Pool & Cobo. I'm ready to travel, the Bitcoin is my ticket",
    name: 'DiscusFish',
    twitter: 'https://twitter.com/bitfish1',
  },
  {
    image: '/team/sea.png',
    description:
      'Core Contributor @theNextDAO // Web3 entrepreneur // NFT Advisor',
    name: '0xSea.eth',
    twitter: 'https://twitter.com/_0xSea',
  },
  {
    image: '/team/xing.jpeg',
    description:
      'A Web2 developer with more than 10 years of experience. Now, looking for some fun in Web3. Call me Xing.',
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
  {
    image: '/team/spider.png',
    description:
      "A spider wandering Web2 and Web3, you can't see me, but I've been weaving.",
    name: 'Spider',
  },
  {
    image: '/team/ooze.jpg',
    description: 'This person is lazy@Left nothing',
    name: 'Ooze',
    twitter: 'https://twitter.com/0x0oze',
  },
  {
    image: '/team/yanelis.jpeg',
    description: 'Director of investment CoinMix Global. YanelisDAO Sponsor.',
    name: 'Yanelis',
    twitter: 'https://twitter.com/Yanelis_yang',
  },
  {
    image: '/team/bjhh.jpeg',
    description:
      'A Web3 builder, a Move contract developer, actively trying fun things.',
    name: '不霁何虹',
    twitter: 'https://twitter.com/WGB5445',
  },
  {
    image: '/team/popil.jpeg',
    description: 'Artist',
    name: 'popil',
    twitter: 'https://twitter.com/popilart',
  },
  {
    image: '/team/wangxiaohai.jpg',
    description: 'A Marxist inside.',
    name: '王小嗨',
    twitter: 'https://twitter.com/yeahwong',
  },
  {
    image: '/team/sean.jpeg',
    description: 'Web3 新人，Web2 游戏产品设计师，JPG 爱好者，币圈韭菜。',
    name: 'SΞAN',
    twitter: 'https://twitter.com/shintemy',
  },
  {
    image: '/team/lidamao.jpeg',
    description: 'Web3 卖萌工程师',
    name: 'lidamao.eth',
    twitter: 'https://twitter.com/LeePerfect233',
  },
  {
    image: '/team/clu.jpg',
    description:
      'Builder and Dreamer. | @theNextDAO. | Build worlds around dreams, Not dreams around worlds.',
    name: 'Clu',
    twitter: 'https://twitter.com/thexclu',
  },
  {
    image: '/team/amadeus.png',
    description:
      'Amadeus by Civil Labs, no-code tool for NFT creator, make NFT easier! ',
    name: 'Amadeus',
    twitter: 'https://twitter.com/amadeus_nft_io',
  },
  {
    image: '/team/wuya.jpg',
    description: 'free animtor',
    name: 'wuya',
    twitter: 'https://twitter.com/wuyaanimation',
  },
  {
    image: '/team/0xvision.png',
    description: 'Web2 educator jogging into Web3.',
    name: '0xVision.eth',
    twitter: 'https://twitter.com/VisionLG0825',
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
        transition: 'all .2s ease-in-out',
        '&:hover': {
          transform: `translateY(-${theme.spacing(1 / 2)})`,
        },
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
          backgroundImage: 'none',
          backgroundColor: '#F3F3F3',
          borderRadius: '18px',
          height: '160px'
        }}
      >
        <Box
          component="img"
          src={props.image}
          title={props.name}
          sx={{
            width: '128px',
            height: '128px',
            filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
          }}
        />
        <Box component={CardContent} position={'relative'} sx={{
          padding: '10px',
          paddingTop: '6px',
          height: '32px !important'
        }}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            height="16px"
          >
            <Typography sx={{
              lineHeight: '16px'
            }} fontWeight={600} fontSize="13px">{props.name}</Typography>
            {props.twitter && (
              <Link height="16px" color={'inherit'} target="_blank" href={props.twitter}>
                <Box
                  height="16px"
                  color="text.secondary"
                  component="img"
                  src="/icons/twitter.svg"
                />
              </Link>
            )}
          </Box>
        </Box>

      </Box>
    </Box>
  );
}

function SimpleContributor(props) {
  const theme = useTheme();

  return (
    <Box
      width={1}
      height={1}
      sx={{
        textDecoration: 'none',
      }}
    >
      <StyledToolTip
        enterTouchDelay={0}
        title={
          <Box
            component={Card}
            display={'flex'}
            flexDirection={'column'}
            width="188px"
            padding={2}
          >
            <Typography
              variant={'body2'}
              color="text.secondary"
              fontSize="0.85rem"
            >
              {props.description}
            </Typography>
            <Box
              display="flex"
              justifyContent={'space-between'}
              alignItems="center"
            >
              {props.twitter && (
                <Link
                  color={'inherit'}
                  display="flex"
                  target="_blank"
                  href={props.twitter}
                >
                  <Box
                    width="30px"
                    color="text.secondary"
                    component="img"
                    src="/icons/twitter.svg"
                  />
                </Link>
              )}
            </Box>
          </Box>
        }
      >
        <Box
          component={Card}
          width={1}
          height={1}
          borderRadius="50%"
          boxShadow="none"
          display={'flex'}
          flexDirection={'column'}
          sx={{ backgroundImage: 'none', background: '#fff' }}
        >
          <Box
            component="img"
            src={props.image}
            title={props.name}
            sx={{
              width: '100%',
            }}
          />
        </Box>
      </StyledToolTip>
    </Box>
  );
}

export default function SectionTeam() {
  const theme = useTheme();
  const t = useTranslations('SectionTeam');
  return (
    <SectionSimpleWrapper id="team">
      <Box>
        <Typography
          textAlign="center"
          marginBottom={4}
          variant="h6"
          sx={{ fontWeight: 900 }}
        >
          {t(`sectionTeam-content-11`)}
        </Typography>
        <Box padding={2} marginBottom={8}>
          <Grid container spacing={3.125}>
            {coreContributors.map((item, i) => (
              <Grid item xs={12} sm={6} md={12 / 8} key={i}>
                <Contributor {...item} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Typography
          textAlign="center"
          marginBottom={4}
          variant="h6"
          sx={{ fontWeight: 900 }}
        >
          {t(`sectionTeam-content-12`)}
        </Typography>
        <Box padding={2} marginBottom={8}>
          <Grid container spacing={3.125}>
            {_.shuffle(activeContributors).map((item, i) => (
              <Grid item xs={6} sm={3} md={12 / 8} key={i}>
                <SimpleContributor {...item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </SectionSimpleWrapper>
  );
}

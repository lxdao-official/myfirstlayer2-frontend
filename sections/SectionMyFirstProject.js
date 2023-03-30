import { useTranslations } from 'next-intl';
import React from 'react';

import AddIcon from '@mui/icons-material/Add';
import {
  Box,
  Button,
  Card,
  Grid,
  Link,
  Typography,
  useTheme,
} from '@mui/material';

import MyFirstArrow from '../components/svg/MyFirstArrow';
import SectionSimpleWrapper from './SectionSimpleWrapper';

export const myfirstProjects = [
  {
    projectName: 'My First NFT',
    holder: '1000 holder',
    image: '/project/myfirstnft.svg',
    bigImage: '/project/myfirstnftCard.svg',
    description: `MyFirstNFT is a non-profit instructional project for Web3 newbies. Get a FREE NFT while learning about Web3, underlying values of NFT, and security principles.`,
    url: 'https://myfirstnft.info/',
  },
  {
    projectName: 'My First NFT',
    holder: '1000 holder',
    image: '/project/myfirstnft.svg',
    bigImage: '/project/myfirstnftCard.svg',
    description: `MyFirstNFT is a non-profit instructional project for Web3 newbies. Get a FREE NFT while learning about Web3, underlying values of NFT, and security principles.`,
    url: 'https://myfirstnft.info/',
  },
  {
    projectName: 'My First NFT',
    holder: '1000 holder',
    image: '/project/myfirstnft.svg',
    bigImage: '/project/myfirstnftCard.svg',
    description: `MyFirstNFT is a non-profit instructional project for Web3 newbies. Get a FREE NFT while learning about Web3, underlying values of NFT, and security principles.`,
    url: 'https://myfirstnft.info/',
  },
];

function MyFirstCard(props) {
  const theme = useTheme();

  return (
    <Box
      width={1}
      height={1}
      sx={{
        textDecoration: 'none',
        paddingBottom: '50px',
        borderRadius: '18px',
      }}
    >
      <Box
        width={1}
        height={1}
        display={'flex'}
        flexDirection={'column'}
        sx={{
          backgroundColor: 'background.level3',
          borderRadius: '18px',
          height: '410px',
          padding: '20px',
          '&:hover': {
            boxShadow: theme.palette.shadow.level1,
          },
        }}
      >
        <Box display="flex" flexDirection={'row'}>
          <Box
            component={Card}
            width={'80px'}
            height={'80px'}
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
                width: '56px',
              }}
            />
          </Box>
          <Box
            marginLeft={'15px'}
            boxShadow="none"
            display={'flex'}
            flexDirection={'column'}
          >
            <Typography color="text.primary" variant="h6" fontWeight={800}>
              {props.projectName}
            </Typography>
            <Typography color="text.primary" fontSize={'12px'} fontWeight={400}>
              {props.holder}
            </Typography>
          </Box>
        </Box>
        <Box
          marginTop={'20px'}
          component="img"
          src={props.bigImage}
          title={props.title}
          sx={{
            width: '100%',
            filter:
              props.theme.palette?.mode === 'dark' ? 'brightness(0.7)' : 'none',
          }}
        />
        <Box marginTop={'20px'} marginBottom={'15px'}>
          <Typography
            color="text.primary"
            fontSize={'12px'}
            fontWeight={400}
            fontFamily="Open Sans"
          >
            {props.description}
          </Typography>
        </Box>

        <Box>
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
            <Typography
              color="text.primary"
              fontSize={'12px'}
              fontWeight={600}
              fontFamily="Open Sans"
            >
              View More
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

  return (
    <SectionSimpleWrapper title={t(`sectionMyFirst-title-10`)} id="next">
      <Box padding={{ xs: 2, sm: 0 }}>
        <Grid container spacing={3.125}>
          {myfirstProjects.map((item, i) => (
            <Grid rowGap="25px" item xs={12} sm={6} md={4} key={i}>
              <MyFirstCard theme={theme} {...item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </SectionSimpleWrapper>
  );
}

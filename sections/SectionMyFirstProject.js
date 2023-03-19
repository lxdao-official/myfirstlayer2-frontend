import { useTranslations } from 'next-intl';
import React from 'react';

import AddIcon from '@mui/icons-material/Add';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Link,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import StyledToolTip from '../components/StyledToolTip';
import showMessage from '../components/showMessage';
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
  return (
    <Box
      width={1}
      height={1}
      sx={{
        textDecoration: 'none',
        transition: 'all .2s ease-in-out',

        boxShadow: '0px 2px 8px 0px #0000000A',
        borderRadius: '18px',
      }}
    >
      <Box
        width={1}
        height={1}
        display={'flex'}
        flexDirection={'column'}
        sx={{
          backgroundColor: '#F3F3F3',
          borderRadius: '18px',
          height: '410px',
          padding: '20px',
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
            <Typography variant="h6" fontWeight={800}>
              {props.projectName}
            </Typography>
            <Typography fontSize={'12px'} fontWeight={400}>
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
              props.theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
          }}
        />
        <Box marginTop={'20px'} marginBottom={'15px'}>
          <Typography fontSize={'12px'} fontWeight={400} fontFamily="Open Sans">
            {props.description}
          </Typography>
        </Box>

        <Box>
          <Link
            color={'inherit'}
            target="_blank"
            href={props.url}
            display="flex"
            justifyContent="flex-end"
            sx={{
              textDecoration: 'none',
            }}
          >
            <Typography
              fontSize={'12px'}
              fontWeight={600}
              fontFamily="Open Sans"
            >
              View More
            </Typography>
            <Box
              marginLeft={'10px'}
              width="19px"
              component="img"
              src="/project/arrow.svg"
            />
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

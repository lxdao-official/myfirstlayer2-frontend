import React from 'react';
import styled from 'styled-components';

import { Box, Grid, Link, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import CommunityLinkGroup from './CommunityLinkGroup';
import Container from './Container';

const SignupFormWrapper = styled.div`
  & input,
  & button {
    background: white;
    font-size: 16px;
    line-height: 24px;
  }

  & input {
    width: 270px;
    height: 48px;
    padding: 12px 14px;
    margin-right: 16px;
    border: 0.5px solid #d0d5dd;
    border-radius: 6px;
  }

  & button {
    background: linear-gradient(90deg, #305fe8 0%, #3ad9e3 100%);
    padding: 12px 20px;
    outline: none;
    border: none;
    border-radius: 6px;
    color: #ffffff;
    cursor: pointer;
    line-height: 24px;
  }
  @media (max-width: 600px) {
    & button {
      margin-top: 20px;
    }
  }
  & .msg-alert > p {
    color: #305fe8 !important;
  }
`;

const NavList = ({ title, items }) => (
  <Box display="flex" flexDirection="column">
    <Typography variant="h6" lineHeight="58px" color="black" fontWeight={700}>
      {title}
    </Typography>
    {items.map((item, index) => {
      return (
        <Link target="_blank" href={item.link} sx={{ textDecoration: 'none' }} key={index}>
          <Typography color="#646F7C" variant="body1" lineHeight="40px" fontWeight={400}>
            {item.name}
          </Typography>
        </Link>
      );
    })}
  </Box>
);

const Footer = () => {
  const theme = useTheme();
  return (
    <Box sx={{ background: '#ffffff' }} width="100%">
      <Container paddingY={{ md: '50px', xs: '44px' }} margin="0 auto">
        <Box display="flex" flexDirection={{ lg: 'row', md: 'column', xs: 'column' }}>
          <Grid container spacing={{ lg: 6, md: 8 }} flex={2}>
            <Grid item lg={4} md={4} xs={6}>
              <NavList
                title="My First Series"
                items={[
                  {
                    name: 'My First NFT',
                    link: 'https://github.com/lxdao-official/LXDAO-Developer-Guide',
                  },
                  {
                    name: 'My First Layer2',
                    link: '',
                  },
                ]}
              />
            </Grid>
            <Grid item lg={4} md={4} xs={6}>
              <NavList
                title="Buidl Together"
                items={[
                  { name: 'Join Us', link: 'https://www.lxdao.io/joinus' },
                  {
                    name: 'Github',
                    link: 'https://github.com/lxdao-official',
                  },
                  {
                    name: 'Donate',
                    link: 'https://builder.gitcoin.co/#/chains/1/registry/0x03506eD3f57892C85DB20C36846e9c808aFe9ef4/projects/893',
                  },
                ]}
              />
            </Grid>
            <Grid item lg={4} md={4} xs={6}>
              <NavList
                title="Resources"
                items={[
                  { name: 'LX DAO', link: 'https://lxdao.io/' },
                  {
                    name: 'Blog',
                    link: 'https://lxdao.notion.site/',
                  },
                  { name: 'Forum', link: 'https://forum.lxdao.io/' },
                ]}
              />
            </Grid>
          </Grid>
          <Box display="flex" gap="24px" flexDirection="column" marginTop={{ lg: 0,  xs: 4 }} flex={1}>
            <Box width="147px" height="58px" component={'img'} src={'/icons/lxdao-logo.svg'} />
            <Typography variant="body1" lineHeight="24px" fontWeight={400} color="#666F85" textTransform="uppercase">
              LXDAO is an <span style={{ color: '#3C7AFF' }}>R&D</span>
              -focused DAO in Web3
            </Typography>
            <CommunityLinkGroup marginBottom={0} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

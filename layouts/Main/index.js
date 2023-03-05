import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTranslations } from 'next-intl';
import Container from '../../components/Container';
import Language from '../../components/Language';
import Divider from '@mui/material/Divider';
import { LXDAOLogo } from 'lxdao-ui';

const Main = ({ children, colorInvert = false, bgcolor = 'transparent' }) => {
  const t = useTranslations('Main');
  const theme = useTheme();

  const smallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box>
      <Box id="fixed-header">
        <Container
          paddingY={1}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexDirection={smallScreen ? 'column' : 'row'}
        >
          <Box
            display={'flex'}
            component="a"
            href="/"
            title="theFront"
            flexDirection={{ xs: 'column', sm: 'row' }}
            alignItems="center"
            sx={{ color: theme.palette.common.black, textDecoration: 'none' }}
          >
            <Box
              width="125px"
              height="20px"
              component={'img'}
              src={'/icons/logoLight.svg'}
            />

            <Divider
              orientation="vertical"
              sx={{
                borderColor: '#DADADA',
                height: '18px',
                marginInline: { xs: '5px', sm: '24px' },
                display: { xs: 'none', sm: 'block' },
              }}
            />
            <Box marginTop={{ xs: '10px', sm: 0 }}>
              <LXDAOLogo />
            </Box>
          </Box>
          <Box
            gap={4}
            display={{ md: 'flex', sm: 'none', xs: 'none' }}
            fontSize={2}
            lineHeight={3}
          >
            <Typography
              sx={{ cursor: 'pointer', color: '#6E6E6E' }}
              onClick={() => {
                router.push('/introduce');
              }}
            >
              Introduce
            </Typography>
            <Typography
              sx={{ cursor: 'pointer' }}
              onClick={() => {
                router.push('/content');
              }}
            >
              Content
            </Typography>
            <Typography
              sx={{ cursor: 'pointer' }}
              onClick={() => {
                router.push('/joinus');
              }}
            >
              Join Us
            </Typography>
          </Box>
          <Box right={{ xs: '12px', sm: '32px' }} zIndex={10}>
            <Language />
          </Box>
        </Container>
      </Box>
      <Box bgcolor={'alternate.main'} component="main" id="main">
        {children}
      </Box>
    </Box>
  );
};

export default Main;

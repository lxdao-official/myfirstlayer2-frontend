import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Typography,
  useMediaQuery,
  Menu,
  MenuItem,
  Link,
} from '@mui/material';
import { useTranslations } from 'next-intl';
import Container from '../../components/Container';
import Language from '../../components/Language';
import Divider from '@mui/material/Divider';
import LXDAOLogo from '../../components/LXDAOLogo';
import { useRouter } from 'next/router';
import { display } from '@mui/system';

const Main = ({ children, colorInvert = false, bgcolor = 'transparent' }) => {
  const router = useRouter();

  const [current, setCurrent] = useState('introduce');
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const t = useTranslations('Main');
  const theme = useTheme();

  const smallScreen = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {}, []);

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
                borderColor: '#000',
                height: '24px',
                marginInline: { xs: '5px', sm: '20px' },
                display: { xs: 'none', sm: 'block' },
              }}
            />
            <Box height={'32px'} mt={{ xs: '10px', sm: 0 }}>
              <LXDAOLogo color={theme.palette.common.black} />
            </Box>
          </Box>
          <Box gap={4} display={{ md: 'flex', sm: 'none', xs: 'none' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography
                sx={{
                  cursor: 'pointer',
                  fontSize: '20px',
                  fontWeight: '700',
                  color: current == 'introduce' ? '#000' : '#6E6E6E',
                }}
                onClick={() => {
                  router.push('/');
                  setCurrent('introduce');
                }}
              >
                Introduce
              </Typography>
              {current == 'introduce' && (
                <Box width="35px" height="2px" sx={{ background: '#000' }} />
              )}
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography
                sx={{
                  cursor: 'pointer',
                  fontSize: '20px',
                  fontWeight: '700',
                  color: current == 'content' ? '#000' : '#6E6E6E',
                }}
                onClick={() => {
                  router.push('/');
                  setCurrent('content');
                }}
              >
                Content
              </Typography>
              {current == 'content' && (
                <Box width="35px" height="2px" sx={{ background: '#000' }} />
              )}
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: current == 'joinus' ? '#000' : '#6E6E6E',
              }}
            >
              <Typography
                sx={{
                  cursor: 'pointer',
                  fontSize: '20px',
                  fontWeight: '700',
                }}
                onClick={() => {
                  router.push('/');
                  setCurrent('joinus');
                }}
              >
                Join Us
              </Typography>
              {current == 'joinus' && (
                <Box width="35px" height="2px" sx={{ background: '#000' }} />
              )}
            </Box>
          </Box>
          <Box sx={{ display: 'flex' }} zIndex={10}>
            <Box
              component="img"
              src="/theme.svg"
              sx={{ cursor: 'pointer' }}
              onClick={() => {
                if (mode === 'light') {
                  setMode('dark');
                } else {
                  setMode('light');
                }
              }}
            />
            <Box
              component="img"
              src="/question.svg"
              marginLeft="20px"
              marginRight="14px"
              sx={{ cursor: 'pointer' }}
            />
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

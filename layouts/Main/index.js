import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';

import {
  Box,
  Divider,
  Link,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { display } from '@mui/system';

import Container from '../../components/Container';
import LXDAOLogo from '../../components/LXDAOLogo';
import Language from '../../components/Language';
import { ColorModeContext } from '../../pages/_app';

const Main = ({ children, colorInvert = false, bgcolor = 'transparent' }) => {
  const router = useRouter();

  const colorMode = useContext(ColorModeContext);
  const [current, setCurrent] = useState('introduce');
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const t = useTranslations('Main');
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box>
      <Box
        id="fixed-header"
        backgroundColor="#fff"
        position="fixed"
        zIndex={100}
        width={'100vw'}
        top={0}
      >
        {smallScreen ? (
          <Container
            display="flex"
            flexDirection="column"
            alignItems="center"
            padding={0}
          >
            <Stack
              width="100%"
              height="45px"
              paddingLeft="24px"
              paddingRight="12px"
              direction="row"
              justifyContent="space-between"
            >
              <Box
                display="flex"
                component="a"
                href="/"
                title="theFront"
                flexDirection="row"
                alignItems="center"
              >
                <Box
                  width="82px"
                  component={'img'}
                  src={'/icons/logoLight.svg'}
                />
                <Divider
                  orientation="vertical"
                  sx={{
                    borderColor: '#000',
                    height: '16px',
                    marginInline: '15px',
                  }}
                />

                <LXDAOLogo
                  width={79}
                  height={21}
                  color={theme.palette.common.black}
                />
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center' }} zIndex={10}>
                <Box
                  component="img"
                  src="/theme.svg"
                  width="18px"
                  sx={{ cursor: 'pointer' }}
                  onClick={colorMode.toggleColorMode}
                />
                <Box
                  component="img"
                  src="/question.svg"
                  marginX="11px"
                  width="18px"
                  sx={{ cursor: 'pointer' }}
                />
                <Language />
              </Box>
            </Stack>
            <Box
              width="100%"
              height={'36px'}
              justifyContent="space-evenly"
              alignItems="center"
              display="flex"
              backgroundColor="black"
            >
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
                    fontSize: '13px',
                    fontWeight: '700',
                    color: current == 'introduce' ? '#fff' : '#6E6E6E',
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
                    fontSize: '13px',

                    fontWeight: '700',
                    color: current == 'content' ? '#fff' : '#6E6E6E',
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
                  color: current == 'joinus' ? '#fff' : '#6E6E6E',
                }}
              >
                <Typography
                  sx={{
                    cursor: 'pointer',
                    fontSize: '13px',
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
          </Container>
        ) : (
          <Container
            paddingY={1}
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            height="112px"
          >
            <Box
              display="flex"
              component="a"
              href="/"
              title="theFront"
              flexDirection="row"
              alignItems="center"
            >
              <Box
                width="125px"
                component={'img'}
                src={'/icons/logoLight.svg'}
              />
              <Divider
                orientation="vertical"
                sx={{
                  borderColor: '#000',
                  height: '24px',
                  marginInline: '20px',
                }}
              />

              <LXDAOLogo
                width={121}
                height={32}
                color={theme.palette.common.black}
              />
            </Box>
            <Box gap={4} display="flex" alignItems="center">
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
                onClick={colorMode.toggleColorMode}
              />
              <Box
                component="img"
                src="/question.svg"
                margin="20px"
                sx={{ cursor: 'pointer' }}
              />
              <Language />
            </Box>
          </Container>
        )}
      </Box>
      <Box
        bgcolor={'alternate.main'}
        component="main"
        id="main"
        mt={smallScreen ? '81px' : '112px'}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Main;

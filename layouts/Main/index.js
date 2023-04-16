import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';

import { Box, Divider, Link, Menu, MenuItem, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { display } from '@mui/system';

import Container from '../../components/Container';
import LXDAOLogo from '../../components/LXDAOLogo';
import Language from '../../components/Language';
import MFL2 from '../../components/svg/MFL2';
import Question from '../../components/svg/Question';
import Theme from '../../components/svg/Theme';
import { ColorModeContext } from '../../pages/_app';
import SectionTop from '../../sections/SectionTop';

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
      <Box id="fixed-header" bgcolor={'header.main'} paddingX="50px" position="fixed" zIndex={100} width={'100vw'} top={0}>
        {smallScreen ? (
          <Container display="flex" flexDirection="column" alignItems="center" padding={0}>
            <Stack width="100%" height="45px" paddingLeft="24px" paddingRight="12px" direction="row" justifyContent="space-between">
              <Box display="flex" component="a" href="/" title="theFront" flexDirection="row" alignItems="center">
                <MFL2 width="82px" color={theme.palette.text.primary} />
                <Divider
                  orientation="vertical"
                  sx={{
                    borderColor: theme.palette.text.primary,
                    height: '16px',
                    marginInline: '15px',
                  }}
                />
                <LXDAOLogo width={79} height={21} color={theme.palette.text.primary} />
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center' }} zIndex={10}>
                <Theme width={18} height={18} color={theme.palette.text.primary} style={{ cursor: 'pointer' }} onClick={colorMode.toggleColorMode} />
                <Question width={18} height={18} style={{ margin: '11px' }} color={theme.palette.text.primary} />
                <Language color={theme.palette.text.primary} />
              </Box>
            </Stack>
            <Box width="100%" height={'36px'} justifyContent="space-evenly" alignItems="center" display="flex" backgroundColor="black">
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
                    color: current == 'introduce' ? 'white' : theme.palette.text.secondary,
                  }}
                >
                  <Link
                    sx={{
                      textDecoration: 'none',
                    }}
                    href="#introduce"
                    target="_self"
                  >
                    Introduce
                  </Link>
                </Typography>
                {current == 'introduce' && <Box width="35px" height="2px" sx={{ background: 'white' }} />}
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
                    color: current == 'content' ? 'white' : theme.palette.text.secondary,
                  }}
                >
                  <Link
                    sx={{
                      textDecoration: 'none',
                    }}
                    href="#content"
                    target="_self"
                  >
                    Content
                  </Link>
                </Typography>
                {current == 'content' && <Box width="35px" height="2px" sx={{ background: 'white' }} />}
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  color: current == 'joinus' ? 'white' : theme.palette.text.secondary,
                }}
              >
                <Typography
                  sx={{
                    cursor: 'pointer',
                    fontSize: '13px',
                    fontWeight: '700',
                  }}
                >
                  <Link
                    sx={{
                      textDecoration: 'none',
                    }}
                    href="#oinus"
                    target="_self"
                  >
                    Join Us
                  </Link>
                </Typography>
                {current == 'joinus' && <Box width="35px" height="2px" sx={{ background: 'white' }} />}
              </Box>
            </Box>
          </Container>
        ) : (
          <Container maxWidth="100%" paddingX={0} paddingY={1} display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" height="80px">
            <Box display="flex" component="a" href="/" title="theFront" flexDirection="row" alignItems="center">
              <MFL2 color={theme.palette.text.primary} />
              <Divider
                orientation="vertical"
                sx={{
                  borderColor: theme.palette.text.primary,
                  height: '24px',
                  marginInline: '20px',
                }}
              />
              <LXDAOLogo width={121} height={32} color={theme.palette.text.primary} />
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
                    color: current == 'introduce' ? theme.palette.text.primary : theme.palette.text.secondary,
                  }}
                >
                  <Link
                    sx={{
                      textDecoration: 'none',
                    }}
                    href="#introduce"
                    target="_self"
                  >
                    Introduce
                  </Link>
                </Typography>
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
                    color: current == 'content' ? theme.palette.text.primary : theme.palette.text.secondary,
                  }}
                >
                  <Link
                    sx={{
                      textDecoration: 'none',
                    }}
                    href="#content"
                    target="_self"
                  >
                    Content
                  </Link>
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  color: current == 'joinus' ? theme.palette.text.primary : theme.palette.text.secondary,
                }}
              >
                <Typography
                  sx={{
                    cursor: 'pointer',
                    fontSize: '20px',
                    fontWeight: '700',
                  }}
                >
                  <Link
                    sx={{
                      textDecoration: 'none',
                    }}
                    href="#joinus"
                    target="_self"
                  >
                    Join Us
                  </Link>
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }} zIndex={10}>
              <Theme color={theme.palette.text.primary} style={{ cursor: 'pointer' }} onClick={colorMode.toggleColorMode} />
              <Question color={theme.palette.text.primary} style={{ margin: '20px' }} />
              <Language color={theme.palette.text.primary} />
            </Box>
          </Container>
        )}
      </Box>
      <SectionTop width={'100vw'} />
      <Box bgcolor="bodyBg.main" component="main" id="main" paddingTop={{ sx: '80px', md: '120px' }}>
        {children}
      </Box>
    </Box>
  );
};

export default Main;

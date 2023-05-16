import { useLocale } from 'next-intl';
import { useEffect } from 'react';

import { Box, Divider, Link, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';

import Container from '../../components/Container';
import LXDAOLogo from '../../components/LXDAOLogo';
import Language from '../../components/Language';
import { MFL2ConnectButton } from '../../components/MFL2ConnectButton';
import MFL2 from '../../components/svg/MFL2';
import Question from '../../components/svg/Question';
import SectionTop from '../../sections/SectionTop';

const Main = ({ children = false }) => {
  const locale = useLocale();
  console.log(locale);
  const theme = useTheme();
  const titles = {
    en: [
      { href: '"#introduce"', title: 'Introduce' },
      { href: '"#content"', title: 'Content' },
      { href: '"#joinus"', title: 'Join Us' },
    ],
    zh: [
      { href: '"#introduce"', title: '介绍' },
      { href: '"#content"', title: '内容' },
      { href: '"#joinus"', title: '加入我们' },
    ],
  };

  const smallScreen = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const font = new FontFace('sucaijishikangkangti', 'url(/font/sucaijishikangkangti-2-webfont.woff2)');
    document.fonts.add(font);
    font.load();
  }, []);

  return (
    <Box>
      <Box id="fixed-header" bgcolor={'header.main'} zIndex={100} width={'100vw'} top={0}>
        {smallScreen ? (
          <Container display="flex" flexDirection="column" alignItems="center" padding={0} width="100%">
            <Stack width="100%" height="45px" paddingLeft="24px" paddingRight="12px" direction="row" justifyContent="space-between">
              <Box display="flex" flexDirection="row" alignItems="center">
                <MFL2 width="82px" color={theme.palette.primary.contrastText} />
                <Divider
                  orientation="vertical"
                  sx={{
                    borderColor: theme.palette.primary.contrastText,
                    height: '16px',
                    marginInline: '15px',
                  }}
                />
                <Box component="a" target="_blank" href="https://lxdao.io" display="flex" alignItems="center">
                  <LXDAOLogo width={60} height={16} color={theme.palette.primary.contrastText} />
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center' }} zIndex={10}>
                {/* <Theme width={18} height={18} color={theme.palette.primary.contrastText} style={{ cursor: 'pointer' }} onClick={colorMode.toggleColorMode} /> */}
                <Question width={19} height={19} style={{ margin: '11px' }} color={theme.palette.primary.contrastText} />
                <Language color={theme.palette.primary.contrastText} />
              </Box>
            </Stack>
            <Box width="100%" display="flex" justifyContent="space-between" alignItems="center" pr="12px" pl="10px">
              <Box width="200px" height="36px" justifyContent="space-between" alignItems="center" display="flex" mx="10px">
                {titles[locale].map((v, i) => {
                  return (
                    <Box
                      key={i}
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                      }}
                    >
                      <Typography
                        sx={{
                          cursor: 'pointer',
                          fontSize: '10px',
                          fontWeight: '500',
                        }}
                      >
                        <Link
                          sx={{
                            textDecoration: 'none',
                            color: theme.palette.primary.contrastText,
                          }}
                          href={v.href}
                          target="_self"
                        >
                          {v.title}
                        </Link>
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
              <MFL2ConnectButton />
            </Box>
          </Container>
        ) : (
          <Container maxWidth="100%" paddingX={'50px'} paddingY={1} display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" height="60px">
            <Box display="flex" flexDirection="row" alignItems="center">
              <MFL2 color={theme.palette.primary.contrastText} />
              <Divider
                orientation="vertical"
                sx={{
                  borderColor: theme.palette.primary.contrastText,
                  height: '16px',
                  marginInline: '13px',
                }}
              />
              <Box component="a" target="_blank" href="https://lxdao.io" display="flex" alignItems="center">
                <LXDAOLogo width={80} height={20} color={theme.palette.primary.contrastText} />
              </Box>
            </Box>
            <Box gap={4} display="flex" alignItems="center">
              {titles[locale].map((v, i) => (
                <Box
                  key={i}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '15px',
                      fontWeight: '400',
                    }}
                  >
                    <Link
                      sx={{
                        textDecoration: 'none',
                        color: theme.palette.primary.contrastText,
                        cursor: 'pointer',
                      }}
                      href={v.href}
                      target="_self"
                    >
                      {v.title}
                    </Link>
                  </Typography>
                </Box>
              ))}
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }} zIndex={10}>
              {/* <Theme color={theme.palette.primary.contrastText} style={{ cursor: 'pointer' }} onClick={colorMode.toggleColorMode} /> */}

              <MFL2ConnectButton />

              <Question color={theme.palette.primary.contrastText} style={{ margin: '12.5px', marginLeft: '21px' }} />
              <Language color={theme.palette.primary.contrastText} />
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

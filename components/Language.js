import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';

import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import Arrow from './svg/Arrow';
import Earth from './svg/Earth';

const Language = ({ color }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const router = useRouter();
  const { locale, locales, route } = router;
  const otherLocale = locales?.find((cur) => cur !== locale);
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const text = {
    zh: {
      sx: '简',
      md: '简体中文',
    },
    en: {
      sx: 'EN',
      md: 'English',
    },
  };

  const handleClick = (event) => {
    setAnchorEl(event.target.parentElement);
  };

  const handleClose = (value) => {
    setAnchorEl(null);
  };

  const setLanguage = (value) => {
    router.push('/' + (value === 'en' ? '' : value));
  };

  const LangNode = useCallback(() => {
    return (
      <Box display="flex" alignItems={'center'}>
        <Box aria-controls={open ? 'language-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} sx={{ cursor: 'pointer' }} onClick={handleClick}>
          <Box display="flex" alignItems="center">
            {!smallScreen && <Earth color={color} />}
            <Typography marginLeft={smallScreen ? 0 : '5px'} marginRight={smallScreen ? 0 : '5px'} fontWeight={400} color={color} fontSize={'12px'} width={{ xs: 'auto', md: '50px' }} textAlign="center">
              {text[locale][smallScreen ? 'sx' : 'md']}
            </Typography>
            <Arrow color={color} style={{ rotate: open && '180deg' }} />
          </Box>
        </Box>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          disableScrollLock={true}
          MenuListProps={{
            'aria-labelledby': 'lock-button',
            role: 'listbox',
          }}
          autoFocus={false}
          sx={{
            '&.MuiPopover-root': {
              width: '130px',
              paddingY: '10px',
              marginTop: '12px',
              '.MuiPaper-root': {
                boxShadow: theme.palette.shadow.level2,
                borderRadius: '18px !important',
                backgroundColor: 'background.level3',
                display: 'flex',
                justifyContent: 'center',
                ul: {
                  paddingY: '10px',
                  width: '79px',
                  li: {
                    display: 'flex',
                    justifyContent: 'center',
                    '&:hover': { paddingInline: '10px', background: 'background.hover', borderRadius: '8px' },
                    '&:focus': { paddingInline: '10px', background: 'background.hover', borderRadius: '8px' },
                  },
                },
              },
            },
          }}
        >
          <MenuItem onClick={handleClose}>
            <Typography fontSize={'15px'}>
              <Link href={route} locale="en">
                English
              </Link>
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Typography fontSize={'15px'}>
              <Link href={route} locale="zh">
                简体中文
              </Link>
            </Typography>
          </MenuItem>
        </Menu>
      </Box>
    );
  }, [locale, anchorEl, color]);

  return LangNode();
};

export default Language;

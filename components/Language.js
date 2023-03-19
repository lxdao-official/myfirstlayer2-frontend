import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';

import LanguageIcon from '@mui/icons-material/Language';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { borderRadius } from '@mui/system';

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
    setAnchorEl(event.target);
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
        <Box
          aria-controls={open ? 'language-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          sx={{ cursor: 'pointer' }}
          onClick={handleClick}
        >
          <Box display="flex" alignItems="center">
            {!smallScreen && <Earth color={color} />}
            <Typography
              marginLeft={smallScreen ? 0 : 1}
              marginRight={smallScreen ? 0 : 0.5}
              color={color}
              fontSize={smallScreen ? '13px' : '18px'}
            >
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
          autoFocus={true}
        >
          <MenuItem>
            <Typography variant="body1">
              <Link href={route} locale="en">
                English
              </Link>
            </Typography>
          </MenuItem>
          <MenuItem>
            <Typography variant="body1">
              <Link href={route} locale="zh">
                简体中文
              </Link>
            </Typography>
          </MenuItem>
          <MenuItem
            onClick={() => {
              alert(
                'If you want to translate to your native language, please contact us on Discord.'
              );
            }}
          >
            <Typography variant="body1">Your Lang?</Typography>
          </MenuItem>
        </Menu>
      </Box>
    );
  }, [locale, anchorEl]);
  return LangNode();
};

export default Language;

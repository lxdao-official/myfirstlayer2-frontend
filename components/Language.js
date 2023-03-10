import { useCallback, useState } from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { borderRadius } from '@mui/system';

const Language = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const router = useRouter();
  const { locale, locales, route } = router;
  const otherLocale = locales?.find((cur) => cur !== locale);

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
      <Box marginLeft="auto">
        <Button
          aria-controls={open ? 'language-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <Box display="flex">
            <Box component="img" src="/earth.svg" />
            <Typography
              marginLeft={1}
              marginRight={0.5}
              color={'#000'}
              lineHeight={'26px'}
            >
              {locale === 'zh' ? '简体中文' : 'English'}
            </Typography>
            <Box
              component="img"
              src="/arrow.svg"
              sx={{ rotate: open && '180deg' }}
            />
          </Box>
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          disableScrollLock={false}
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

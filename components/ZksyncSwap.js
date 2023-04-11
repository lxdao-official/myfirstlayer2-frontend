import { useTranslations } from 'next-intl';

import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

export default function ZksyncSwap({ children, title }) {
  const t = useTranslations('PageLayout');

  return (
    <Box display="flex" justifyContent="center" marginTop={2}>
      <iframe style={{ border: 'none' }} width="390" height="750" src="https://zk.amphi.space/bridge" />
    </Box>
  );
}

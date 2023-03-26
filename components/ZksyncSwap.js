import { useTranslations } from 'next-intl';

import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

export default function ZksyncSwap({ children, title }) {
  const t = useTranslations('PageLayout');

  return (
    <Box width={390}>
      <iframe width="390" height="700" src="https://zk.amphi.space/" />
    </Box>
  );
}

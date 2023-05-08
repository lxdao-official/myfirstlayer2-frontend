import React from 'react';

import { Box, Link } from '@mui/material';

const CommunityLinkGroup = ({ marginBottom = 10 }) => (
  <Box display="flex" gap={2} marginBottom={marginBottom}>
    <Link href="https://twitter.com/LXDAO_Official" target="_blank">
      <Box component={'img'} src={'/icons/telegram-circle.svg'} />
    </Link>
    <Link href="https://twitter.com/LXDAO_Official" target="_blank">
      <Box component={'img'} src={'/icons/twitter-circle.svg'} />
    </Link>
    <Link href="https://discord.lxdao.io" target="_blank">
      <Box component={'img'} src={'/icons/discord-circle.svg'} />
    </Link>
    <Link href="https://forum.lxdao.io/" target="_blank">
      <Box component={'img'} src={'/icons/forum-circle.svg'} />
    </Link>
  </Box>
);

export default CommunityLinkGroup;

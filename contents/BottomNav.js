import {
  Box,
  Hidden,
} from '@mui/material';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { MobileDirectory } from './Directory';
import Progress from './Progress';

export default function BottomNav(props) {
  const { directoryText } = props
  return (
    <Box
      backgroundColor='#ECECEC'
      display='flex'
      height={80}
      alignItems='center'
      justifyContent='space-around'
      marginTop={4}
      paddingX={4}
    >
      <Box>
        <ConnectButton />
      </Box>
      <Box flexGrow={2} marginX="20px">
        <Progress  />
      </Box>
      <Hidden smUp>
         <MobileDirectory directoryText={directoryText}></MobileDirectory>
       </Hidden>
    </Box>
  )
}
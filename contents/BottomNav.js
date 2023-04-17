import {
  Link,
  Card,
  Box,
  Typography,
  Grid,
  CardContent,
  CardActions,
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
      // borderTop="1px solid #000"
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
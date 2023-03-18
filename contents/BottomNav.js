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

export default function BottomNav() {

  return (
    <Box
      backgroundColor='#ECECEC'
      display='flex'
      height={80}
      alignItems='center'
      justifyContent='space-around'
      marginTop={4}
    >
      <ConnectButton />
      <Progress />
      <Hidden smUp>
         <MobileDirectory></MobileDirectory>
       </Hidden>
    </Box>
  )
}
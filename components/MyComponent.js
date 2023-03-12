import {
  Link,
  Card,
  Box,
  Typography,
  Grid,
  CardContent,
  CardActions,
} from '@mui/material';

const IMG = [
  '/team/bruce.jpg',
  '/team/muxin.png',
]

export default function MyComponent() {

  return (
    <Box
      padding={{ xs: 2, md: 4 }}
      marginTop={{ xs: 4, md: 6 }}
      position="relative"
    >
      <Box display="flex" justifyContent="space-between">
        <Box>
          <img src={IMG[0]} width={100} height={100}></img>
        </Box>
        {/* <Box>
          12345678901234567890
        </Box> */}
      </Box>
    </Box>
  );
}

import {
  Box,
  Card,
  CardActions,
  CardContent,
  Grid,
  Hidden,
  Link,
  Typography,
} from '@mui/material';

import Container from '../components/Container';
import BottomNav from './BottomNav';
// import Directory from "./Directory";
import { PcDirectory } from './Directory';
import TabChapter from './TabChapter';

export default function Content(props) {
  const { md } = props;

  return (
    <>
      <Container marginTop={4}>
        <Box display="flex" justifyContent="space-between">
          <Box
            marginRight={{
              xs: 0,
              sm: 2,
            }}
          >
            <Box
              sx={{
                backgroundColor: '#ECECEC',
                // width: 920,
              }}
              // width
              borderRadius={2}
              padding={{
                xs: 2,
                sm: 8,
              }}
            >
              {md}
            </Box>
            <TabChapter marginTop={{ xs: '20px', sm: '160px' }}></TabChapter>
          </Box>
          <Hidden smDown>
            <PcDirectory></PcDirectory>
          </Hidden>
        </Box>
      </Container>
      <Hidden smUp>
        <BottomNav />
      </Hidden>
    </>
  );
}

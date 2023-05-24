import { Box } from '@mui/material';

export default function ZksyncSwap() {
  return (
    <Box display="flex" justifyContent="center" marginTop={2} sx={{ width:{xs:'320px',md:'420px'}, margin: 'auto' }}>
      <iframe style={{ border: 'none' }} width="390" height="750" src="https://mfl2-zk-proxy.myfirst.io" />
    </Box>
  );
}

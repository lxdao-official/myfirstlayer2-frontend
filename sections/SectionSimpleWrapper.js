import React from 'react';

import { Box, Typography } from '@mui/material';

export default function SectionSimpleWrapper({ id, title, desc, children, childOverflow = 'hidden', ...rest }) {
  const ref = React.useRef();

  return (
    <Box marginTop={{ xs: 6.875, sm: 6.875, md: 15 }} sx={{ ...rest }} position="relative" className="section" id={`section/${id}`} ref={ref}>
      <Box display="flex" flexDirection="column" alignItems="center" px={2}>
        <Typography
          variant="h3"
          textAlign="center"
          color="text.primary"
          sx={{
            fontWeight: 700,
            lineHeight: { xs: '20px', sm: '36px' },
            fontSize: { xs: '24px', sm: '36px' },
          }}
        >
          {title}
        </Typography>
        <Typography
          textAlign="center"
          color="text.primary"
          sx={{
            color: '#5f6d7e',
            lineHeight: { xs: '18px', sm: '20px' },
            fontWeight: '400',
            fontSize: { xs: '15px', sm: '16px' },
            mb: { xs: '30px', md: '28px' },
            mt: { xs: '10px', md: '20px' }
          }}
        >
          {desc}
        </Typography>
      </Box>
      <Box overflow={childOverflow} maxWidth={{ sm: 720, md: 960, lg: 1200 }} margin="0 auto">
        {children}
      </Box>

    </Box>
  );
}

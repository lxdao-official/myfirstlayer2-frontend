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
              lineHeight: { xs: '20px', sm: '48px' },
              fontSize: { xs: '20px', sm: '40px' },
            }}
          >
            {title}
          </Typography>
          <Typography
            textAlign="center"
            color="text.primary"
            sx={{
              color: '#676767',
              lineHeight: { xs: '20px', sm: '48px' },
              fontWeight: '300',
              fontSize: { xs: '10px', sm: '20px' },
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

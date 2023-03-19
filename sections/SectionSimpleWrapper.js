import React from 'react';

import { Box, Typography } from '@mui/material';

export default function SectionSimpleWrapper({ id, title, children }) {
  const ref = React.useRef();

  return (
    <Box
      marginTop={{ xs: 6.875, sm: 6.875, md: 15 }}
      position="relative"
      className="section"
      id={`section/${id}`}
      ref={ref}
    >
      <Box>
        <Box display="flex" justifyContent="center">
          <Typography
            variant="h3"
            textAlign="center"
            marginBottom={6}
            sx={{
              fontWeight: 800,
              fontSize: { xs: '20px', sm: '48px' },
              fontFamily: 'Open Sans',
            }}
          >
            {title}
          </Typography>
        </Box>
        <Box
          overflow="hidden"
          maxWidth={{ sm: 720, md: 960, lg: 1200 }}
          margin="0 auto"
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}

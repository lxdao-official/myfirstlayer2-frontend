import { useTranslations } from 'next-intl';
import React from 'react';

import { Box, Link, Typography } from '@mui/material';

import { orgDonation } from '../donation';
import SectionSimpleWrapper from './SectionSimpleWrapper';


export default function SectionSponsors() {
  const t = useTranslations('SectionSponsors');

  return (
    <SectionSimpleWrapper title={t(`sectionSponsors-title-10`)} desc={t('sectionSponsors-title-11')} id="next">
      <Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
          {orgDonation.map((item, i) => {
            return (
              <Link key={i} target="_blank" href={item.website}>
                <Box width="186px" height="84px" display="flex" justifyContent="center" alignItems="center" border="1px solid #D9D9D9" borderRadius="6px">
                  <Box component="img" src={item.image} height="44px" width="full" />
                </Box>
              </Link>
            );
          })}
          <Link target="_blank" href="https://twitter.com/brucexu_eth" underline="none">
            <Box width="186px" height="84px" display="flex" justifyContent="center" alignItems="center" border="1px solid #D9D9D9" borderRadius="6px" gap="10px">
              <Typography fontWeight={600} color="#517def">Support us</Typography>
              <Box fontSize="12px" width="14px" height="12px">
                <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.16666 6H12M7.83332 1L12.2441 5.41074C12.5695 5.73618 12.5695 6.26382 12.2441 6.58926L7.83332 11"
                    stroke="#517def" stroke-width="1.67" stroke-linecap="round" />
                </svg>
              </Box>
            </Box>
          </Link>
        </Box>
      </Box>
    </SectionSimpleWrapper>
  );
}

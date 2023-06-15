import { useTranslations } from 'next-intl';
import React from 'react';

import { Box, Link } from '@mui/material';

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
                <Box sx={{ mx: '35px' }} component="img" src={item.image} height="44px" width="full"/>
              </Link>
            );
          })}
        </Box>
      </Box>
    </SectionSimpleWrapper>
  );
}

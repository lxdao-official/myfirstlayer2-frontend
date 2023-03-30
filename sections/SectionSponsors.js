import { useTranslations } from 'next-intl';
import React from 'react';

import AddIcon from '@mui/icons-material/Add';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Link,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import StyledToolTip from '../components/StyledToolTip';
import Twitter from '../components/svg/Twitter';
import Website from '../components/svg/Website';
import { orgDonation, personDonation } from '../donation';
import SectionSimpleWrapper from './SectionSimpleWrapper';

function BigAd(props) {
  const theme = useTheme();
  return (
    <Box
      width={1}
      height={1}
      sx={{
        textDecoration: 'none',
        borderRadius: '18px',
      }}
    >
      <Box
        component={Card}
        width={1}
        height={1}
        display={'flex'}
        flexDirection={'column'}
        sx={{
          boxShadow: 'none',
          backgroundColor: 'background.level3',
          borderRadius: '18px',
          '&:hover': {
            boxShadow: theme.palette.shadow.level1,
          },
        }}
      >
        <Box
          component="img"
          src={props.image}
          title={props.title}
          sx={{
            width: '100%',
            filter:
              props.theme.palette?.mode === 'dark' ? 'brightness(0.7)' : 'none',
          }}
        />
        <Box component={CardContent}>
          <Typography
            variant={'body1'}
            fontWeight={600}
            color="text.primary"
            gutterBottom
          >
            {props.title}
          </Typography>
          <Typography fontSize={'13px'} fontWeight={400} color="text.primary">
            {props.description}
          </Typography>
        </Box>
        <Box flexGrow={1} />
        <Box
          paddingLeft={2}
          paddingRight={'10px'}
          component={CardActions}
          justifyContent="end"
        >
          <Box display="flex" justifyContent="flex-end" gap="10px">
            {props.twitter && (
              <Link color="text.icon" target="_blank" href={props.twitter}>
                <Box width="18px">
                  <Twitter width="18px" />
                </Box>
              </Link>
            )}
            {props.website && (
              <Link
                color="text.icon"
                marginRight="11px"
                target="_blank"
                href={props.website}
              >
                <Website width="18px" />
              </Link>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function SmallAd(props) {
  const theme = useTheme();
  if (props.type === 'instruction') {
    return (
      <Box
        width={1}
        height={1}
        sx={{
          textDecoration: 'none',
        }}
      >
        <Box
          width={1}
          height={1}
          display={'flex'}
          flexDirection={'column'}
          position="relative"
        ></Box>
      </Box>
    );
  }

  return (
    <Box
      width={1}
      height={1}
      sx={{
        textDecoration: 'none',
      }}
    >
      <Box
        component={Card}
        width={1}
        height={1}
        display={'flex'}
        flexDirection={'column'}
        sx={{
          boxShadow: 'none',
          backgroundColor: 'background.level3',
          borderRadius: '18px',
          '&:hover': {
            boxShadow: theme.palette.shadow.level2,
          },
        }}
      >
        <Box
          component="img"
          src={props.image}
          title={props.title}
          sx={{
            width: '100%',
            filter:
              props.theme.palette?.mode === 'dark' ? 'brightness(0.7)' : 'none',
          }}
        />
        <Box
          padding="12px !important"
          component={CardContent}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            variant={'body1'}
            sx={{
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              fontSize: '14px',
            }}
            fontWeight={700}
          >
            {props.title}
          </Typography>

          <Box>
            {props.twitter && (
              <Link color="text.icon" target="_blank" href={props.twitter}>
                <Twitter width="18px" />
              </Link>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default function SectionSponsors() {
  const theme = useTheme();
  const t = useTranslations('SectionSponsors');

  return (
    <SectionSimpleWrapper title={t(`sectionSponsors-title-10`)} id="next">
      <Box padding={{ xs: 2, sm: 0 }}>
        <Grid container spacing={3.125}>
          {orgDonation.map((item, i) => (
            <Grid rowGap="55px" item xs={12} sm={6} md={12 / 5} key={i}>
              <BigAd theme={theme} {...item} />
            </Grid>
          ))}
          {personDonation.map((item, i) => (
            <Grid item xs={6} sm={4} md={2} key={i}>
              <SmallAd theme={theme} {...item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </SectionSimpleWrapper>
  );
}

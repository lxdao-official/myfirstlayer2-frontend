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
import { orgDonation, personDonation } from '../donation';
import SectionSimpleWrapper from './SectionSimpleWrapper';

function BigAd(props) {
  return (
    <Box
      width={1}
      height={1}
      sx={{
        textDecoration: 'none',
        '&:hover': {
          boxShadow: 'shadow.level1',
        },

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
          backgroundColor: 'background.level3',
          borderRadius: '18px',
        }}
      >
        <Box
          component="img"
          src={props.image}
          title={props.title}
          sx={{
            width: '100%',
            filter:
              props.theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
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
          paddingRight={2}
          component={CardActions}
          justifyContent={'space-between'}
        >
          <Box>
            {props.website && (
              <Link
                color="text.fourth"
                marginRight="11px"
                target="_blank"
                href={props.website}
              >
                <Box
                  color="#ccc"
                  width="18px"
                  component="img"
                  src="/icons/website.svg"
                />
              </Link>
            )}
            {props.twitter && (
              <Link color="text.fourth" target="_blank" href={props.twitter}>
                <Box
                  width="18px"
                  color="text.secondary"
                  component="img"
                  src="/icons/twitter.svg"
                />
              </Link>
            )}
          </Box>
          <Box color="text.primary" variant="h6">
            +{props.donation}ETH
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function SmallAd(props) {
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
      <StyledToolTip
        title={
          <Box
            component={Card}
            display={'flex'}
            flexDirection={'column'}
            width="266px"
            padding={1}
          >
            <Typography variant={'body2'} color="text.primary">
              {props.description}
            </Typography>
            <Box marginTop={2}>
              {props.website && (
                <Link color="text.fourth" target="_blank" href={props.website}>
                  <Box
                    color="#ccc"
                    width="40px"
                    component="img"
                    src="/icons/website.svg"
                  />
                </Link>
              )}
              {props.twitter && (
                <Link color="text.fourth" target="_blank" href={props.twitter}>
                  <Box
                    width="40px"
                    color="text.secondary"
                    component="img"
                    src="/icons/twitter.svg"
                  />
                </Link>
              )}
              {props.opensea && (
                <Link color="text.fourth" target="_blank" href={props.opensea}>
                  <Box
                    width="40px"
                    color="text.secondary"
                    component="img"
                    src="/icons/opensea.svg"
                  />
                </Link>
              )}
              {props.discord && (
                <Link color="text.fourth" target="_blank" href={props.discord}>
                  <Box
                    width="40px"
                    color="text.secondary"
                    component="img"
                    src="/icons/discord.svg"
                  />
                </Link>
              )}
            </Box>
            <Box color="text.primary" fontSize="14px">
              +{props.donation}ETH
            </Box>
          </Box>
        }
      >
        <Box
          component={Card}
          width={1}
          height={1}
          display={'flex'}
          flexDirection={'column'}
          sx={{
            backgroundColor: 'background.level3',
            borderRadius: '18px',
          }}
        >
          <Box
            component="img"
            src={props.image}
            title={props.title}
            sx={{
              width: '100%',
              filter:
                props.theme.palette.mode === 'dark'
                  ? 'brightness(0.7)'
                  : 'none',
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
            <Typography
              variant={'body1'}
              sx={{
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                fontSize: '14px',
              }}
            >
              +{props.donation}ETH
            </Typography>
          </Box>
        </Box>
      </StyledToolTip>
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

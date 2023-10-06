import { Box, Link, Typography, useMediaQuery, useTheme, CircularProgress } from '@mui/material';
import { useNetwork, useSwitchNetwork } from 'wagmi';


import MintBadge from './MintBadge';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { networkList } from '../config/config';

export default function Diploma() {
  const { chain = {} } = useNetwork();
  const [newWorkType, setNewWorkType] = useState('test')
  const t = useTranslations('Diploma');
  const theme = useTheme();
  const mdScreen = useMediaQuery(theme.breakpoints.up('md'));
  const { chains, isLoading: swichLoading, switchNetwork } = useSwitchNetwork();

  const [isHover, setIsHover] = useState(-1);

  const handleMouseEnter = (i) => {
    setIsHover(i);
  };
  const handleMouseLeave = () => {
    setIsHover(-1);
  };

  const changeNetwork = (type) => {
    setNewWorkType(type)
  }
  const changeChain = (id) => {
    console.log(chains)
    console.log(switchNetwork)
    switchNetwork?.(id)
  }

  return (
    <Box
      justifyContent="center"
      display="flex"
      sx={{
        background: theme?.palette?.mode === 'dark' ? '#010101' : '#fff',
        borderRadius: '18px',
      }}
      style={{ width: '100%', position: 'relative', zIndex: 1 }}
    >
      <Box
        sx={{
          background: theme?.palette?.mode === 'dark' ? '#010101' : '#fff',
          borderRadius: '18px',
          paddingBottom: '20px',
        }}
        style={{ width: '100%' }}
      >
        <Box sx={{ borderRadius: '18px' }}>
          <h1
            style={{
              fontSize: '30px',
              fontStyle: 'ExtraBold',
              // fontFamily: 'Open Sans',
              color: theme.palette?.mode === 'dark' ? '#fff' : '#000',
              fontWeight: 700,
              textAlign: 'left',
            }}
          >
            Select a layer2 chain to mint your graduation badge
          </h1>
        </Box>
        <div style={{display: 'flex', alignItems: 'flex-start', marginTop: '24px'}}>
          <div style={{flex: 1, marginRight: '24px'}}>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <div style={{width: '150px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', borderRadius: '6px', border: '1px solid #eee', cursor: 'pointer', background: newWorkType == 'main' ? '#000' : '#fff', color: newWorkType == 'main' ? '#fff' : '#000'}} onClick={() => changeNetwork('main')}>Mainnet</div>
              <div style={{width: '150px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', borderRadius: '6px', border: '1px solid #eee', cursor: 'pointer', marginLeft: '20px', background: newWorkType == 'test' ? '#000' : '#fff', color: newWorkType == 'test' ? '#fff' : '#000'}} onClick={() => changeNetwork('test')}>Testnet</div>
            </div>
            <div style={{marginTop: '20px'}}>
              {
                networkList[newWorkType].map((item, i) => (
                  <div onClick={() => changeChain(item.chainId)} key={i} style={{width: '100%', padding: '16px 12px', boxSizing: 'border-box', border: '1px solid #eee', borderRadius: '10px', marginTop: '12px',  background: (chain.id == item.chainId || (isHover == i)) ? '#000' : '#fff', color: (chain.id == item.chainId || (isHover == i)) ? '#fff' : '#000', cursor: 'pointer'}} 
                    onMouseEnter={() => handleMouseEnter(i)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div style={{fontSize: '16px', fontWeight: 500}}>{item.name}</div>
                    <div style={{fontSize: '14px',marginTop: '12px'}}>{item.desc}</div>
                  </div>
                ))
              }
            </div>
          </div>
          <MintBadge style={{flex: 1}} />
        </div>
        {
          swichLoading ? (
            <div style={{position: 'fixed', top: 0, bottom: 0, left: 0, right: 0, background: 'rgba(0, 0, 0, .2)',display:'flex', alignItems: 'center', justifyContent: 'center'}}>
              <CircularProgress color="inherit" />
            </div>
          ) : ''
        }
        
      </Box>
    </Box>
  );
}

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { switchNetwork, disconnect } from '@wagmi/core';
import { useState } from 'react';

import { Box, Button, styled, Typography } from '@mui/material';
import NewButton from './NewButton';

import Arrow from './svg/Arrow';

const NormalButton = styled(Button)(({ theme }) => ({
  borderRadius: '18px',
  [theme.breakpoints.down('md')]: {
    width: '145px',
    height: '29px',
    fontSize: '12px',
  },
  [theme.breakpoints.up('md')]: {
    width: '145px',
    height: '29px',
    fontSize: '12px',
  },
  textTransform: 'capitalize',
  fontWeight: '500',
  backgroundColor: '#000',
  border: '1px solid #fff',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#414141',
    // borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#626262',
    borderColor: '#626262',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0, 0, 0, 0.5)',
  },
}));

const IconButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    width: '121px',
    height: '24px',
    fontSize: '8px',
  },
  [theme.breakpoints.up('md')]: {
    width: '145px',
    height: '29px',
    fontSize: '12px',
  },

  color: 'white',
  textTransform: 'capitalize',
  borderRadius: '8px',
  '&:hover': {
    backgroundColor: '#414141',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#626262',
    borderColor: '#626262',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0, 0, 0, 0.5)',
  },
  '&:disabled': { color: 'white' },
}));

export const MFL2ConnectButton = () => {
  const [open, setOpen] = useState(false);
  const chains = [
    {
      chainId: 420,
      chainName: 'optimism goerli',
      icon: '/icons/op.png',
    },
    {
      chainId: 421613,
      chainName: 'Arbitrum Goerli',
      icon: '/icons/ab.png',
    },
    {
      chainId: 0,
      chainName: 'Disconnect',
      icon: '/icons/disconnect.png',
    },
  ];
  //   const open = Boolean(anchorEl);

  return (
    <ConnectButton.Custom>
      {({ account, chain, openAccountModal, openChainModal, openConnectModal, authenticationStatus, mounted }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading';
        const connected = ready && account && chain && (!authenticationStatus || authenticationStatus === 'authenticated');
        return (
          <Box
            {...(!ready && {
              'aria-hidden': true,
              sx: {
                width: { xs: '121px', md: '145px' },
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {

                return <NewButton onClick={openConnectModal}>
                  Connect Wallet
                </NewButton>;
                // return <NormalButton onClick={openConnectModal}>Connect Wallet</NormalButton>;
              }
              if (chain.unsupported) {
                return <NewButton onClick={openChainModal}>
                  Wrong network
                </NewButton>;
              }
              return (
                <NewButton onClick={openAccountModal}>

                  {account.displayName}

                </NewButton>
                // <Box sx={{ position: 'flex', flexDirection: 'col' }}>
                //   <NormalButton
                //     sx={{
                //       ...(open && {
                //         borderEndEndRadius: '0',
                //         borderEndStartRadius: '0',
                //       }),
                //     }}
                //   >
                //     <span onClick={openAccountModal}>{account.displayName}</span>
                //     <Box
                //       sx={{
                //         display: 'flex',
                //         justifyContent: 'center',
                //         alignItems: 'center',
                //       }}
                //       onClick={() => {
                //         setOpen(!open);
                //       }}
                //     >
                //       <Box
                //         component={'img'}
                //         alt={chain.name ?? 'Chain icon'}
                //         src={
                //           chains.filter((v) => {
                //             if (v.chainId == chain.id) {
                //               return v.icon;
                //             }
                //           })[0].icon
                //         }
                //         sx={{
                //           width: { xs: 16, md: 20 },
                //           height: { xs: 16, md: 20 },
                //           marginLeft: '10px',
                //           marginRight: '6px',
                //         }}
                //       />
                //       <Box sx={{
                //         transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                //       }}>
                //         <Arrow
                //           color="white"
                //           width="12"
                //           height="7"
                //           onClick={() => {
                //             setOpen(!open);
                //           }}
                //         />
                //       </Box>
                //     </Box>
                //   </NormalButton>
                //   {open && (
                //     <Box
                //       sx={{
                //         width: { xs: '121px', md: '146px' },
                //         position: 'absolute',
                //         zIndex: '100',
                //         background: '#000',
                //         color: '#fff',
                //         borderEndEndRadius: '18px',
                //         borderEndStartRadius: '18px',
                //         borderRight: '1px solid #fff',
                //         borderBottom: '1px solid #fff',
                //         borderLeft: '1px solid #fff',
                //       }}
                //     >
                //       {chains.map((v, i) => (
                //         <IconButton
                //           sx={{ position: 'flex', justifyContent: 'start', fontSize: '10px', borderEndEndRadius: v.chainId === 0 && '20px', borderEndStartRadius: v.chainId === 0 && '20px' }}
                //           key={i}
                //           disabled={i >= 1 && v.chainId !== 0}
                //           onClick={async () => {
                //             if (v.chainId === 0) {
                //               await disconnect();
                //             } else {
                //               await switchNetwork({ chainId: v.chainId });
                //               setOpen(!open);
                //             }
                //           }}
                //         >
                //           {v.icon && (
                //             <Box
                //               component={'img'}
                //               alt={v.chainName ?? 'Chain icon'}
                //               src={v.icon}
                //               sx={{
                //                 width: { xs: 16, md: 20 },
                //                 height: { xs: 16, md: 20 },
                //                 marginRight: '10px',
                //                 // marginLeft: '24px',
                //               }}
                //             />
                //           )}
                //           {v.chainName}
                //         </IconButton>
                //       ))}
                //     </Box>
                //   )}
                // </Box>
              );
            })()}
          </Box>
        );
      }}
    </ConnectButton.Custom>
  );
};

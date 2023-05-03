import { ConnectButton } from "@rainbow-me/rainbowkit";
import { switchNetwork } from "@wagmi/core";
import { useState } from "react";

import { Box, Button, Menu, MenuItem, alpha, styled } from "@mui/material";

import Arrow from "./svg/Arrow";

const NormalButton = styled(Button)({
  borderRadius: "18px",
  width: "145px",
  height: "29px",
  fontSize: "12px",
  textTransform: "capitalize",
  fontWeight: "500",
  backgroundColor: "#000",
  border: "1px solid #fff",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#414141",
    // borderColor: '#0062cc',
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#626262",
    borderColor: "#626262",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0, 0, 0, 0.5)",
  },
});

const IconButton = styled(Button)({
  display: "flex",
  alignItems: "center",
  width: "145px",
  height: "29px",
  fontSize: "12px",
  color: "white",
  textTransform: "capitalize",
  borderRadius: "8px",
  "&:hover": {
    backgroundColor: "#414141",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#626262",
    borderColor: "#626262",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0, 0, 0, 0.5)",
  },
  "&:disabled": { color: "white" },
});

export const MFL2ConnectButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const chains = [
    {
      chainId: 420,
      chainName: "optimism goerli",
      icon: "/icons/op.png",
    },
    {
      chainId: 421613,
      chainName: "Arbitrum Goerli",
      icon: "/icons/ab.png",
    },
    {
      chainId: 280,
      chainName: "zkSync Era Testnet",
      icon: "/icons/zk.png",
    },
  ];
  //   const open = Boolean(anchorEl);

  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");
        return (
          <Box
            {...(!ready && {
              "aria-hidden": true,
              sx: {
                width: "145px",
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <NormalButton onClick={openConnectModal}>
                    Connect Wallet
                  </NormalButton>
                );
              }
              if (chain.unsupported) {
                return (
                  //   <Button variant="contained" sx={{ borderRadius: '18px', width: '247px', height: '54px', fontSize: '20px', textTransform: 'capitalize', fontWeight: '800' }} onClick={openChainModal}>
                  //     Wrong network
                  //   </Button>
                  <NormalButton onClick={openChainModal}>
                    Wrong network
                  </NormalButton>
                );
              }
              return (
                <Box sx={{ position: "flex", flexDirection: "col" }}>
                  <NormalButton
                    sx={{
                      ...(open && {
                        borderEndEndRadius: "0",
                        borderEndStartRadius: "0",
                      }),
                    }}
                    // onClick={(e) => {
                    //   //   openAccountModal();

                    // //   openAccountModal();
                    // }}
                  >
                    <span onClick={openAccountModal}>
                      {account.displayName}
                    </span>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      onClick={() => {
                        setOpen(!open);
                      }}
                    >
                      <Box
                        component={"img"}
                        alt={chain.name ?? "Chain icon"}
                        src={
                          chains.filter((v) => {
                            if (v.chainId == chain.id) {
                              return v.icon;
                            }
                          })[0].icon
                        }
                        style={{
                          width: 27,
                          height: 27,
                          marginLeft: "10px",
                          marginRight: "6px",
                        }}
                      />
                      <Arrow
                        color="white"
                        width="12"
                        height="7"
                        style={{
                          transform: open ? "rotate(180deg)" : "rotate(0deg)",
                        }}
                        onClick={() => {
                          setOpen(!open);
                        }}
                      />
                    </Box>
                  </NormalButton>
                  {open && (
                    <Box
                      sx={{
                        padding: "10px",
                        position: "absolute",
                        zIndex: "100",
                        background: "#000",
                        color: "#fff",
                        borderEndEndRadius: "18px",
                        borderEndStartRadius: "18px",
                      }}
                    >
                      {chains.map((v, i) => (
                        <IconButton
                          sx={{ position: "flex", justifyContent: "start" }}
                          key={i}
                          disabled={i >= 1}
                          onClick={async () => {
                            await switchNetwork({ chainId: v.chainId });
                            setOpen(!open);
                          }}
                        >
                          {v.icon && (
                            <Box
                              component={"img"}
                              alt={v.chainName ?? "Chain icon"}
                              src={v.icon}
                              style={{
                                width: 27,
                                height: 27,
                                marginRight: "10px",
                                marginLeft: "24px",
                              }}
                            />
                          )}
                          {v.chainName}
                        </IconButton>
                      ))}
                    </Box>
                  )}
                </Box>
              );

              {
                /* <Button onClick={openChainModal} sx={{ display: 'flex', alignItems: 'center' }} type="button">
                    {chain.hasIcon && (
                      <Box
                        sx={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: 'hidden',
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && <Box component={'img'} alt={chain.name ?? 'Chain icon'} src={chain.iconUrl} style={{ width: 12, height: 12 }} />}
                      </Box>
                    )}
                    {chain.name}
                  </Button> */
              }
            })()}
          </Box>
        );
      }}
    </ConnectButton.Custom>
  );
};

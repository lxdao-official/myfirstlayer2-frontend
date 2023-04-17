import { useEffect, useRef, useState } from 'react';

import { Box, Button, Link, Typography, useTheme, useMediaQuery } from '@mui/material';

import MintBadge from './MintBadge';

export default function Diploma() {
  const theme = useTheme();
  const mdScreen = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Box
      justifyContent="center"
      display="flex"
      sx={{
        background: theme?.palette?.mode === 'dark' ? '#010101' : '#fff',
        borderRadius: '18px',
        // marginTop: '30px',
      }}
    >
      <Box
        sx={{
          background: theme?.palette?.mode === 'dark' ? '#010101' : '#fff',
          borderRadius: '18px',
          // width: mdScreen ? '750px' : '250px',
          // paddingY: '50px',
          // paddingX: '65px',
          paddingBottom: '20px',
        }}
      >
        <Box sx={{ borderRadius: '18px' }}>
          {/* <Typography
            sx={{
              fontSize: { md: '36px', sm: '36px' },
              fontStyle: 'ExtraBold',
              fontFamily: 'Open Sans',
              color: theme.palette?.mode === 'dark' ? '#fff' : '#000',
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: '30px',
            }}
          >
            结业认证
          </Typography> */}
          <h1 style={{
            fontSize: { md: '36px', sm: '36px' },
            fontStyle: 'ExtraBold',
            fontFamily: 'Open Sans',
            color: theme.palette?.mode === 'dark' ? '#fff' : '#000',
            fontWeight: 700,
            textAlign: 'center',
            // marginBottom: '30px',
          }}>
            结业认证
          </h1>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'start' }}>
          <Typography
            sx={{
              fontSize: { md: '20px', sm: '20px' },
              fontStyle: 'ExtraBold',
              fontFamily: 'Open Sans',
              color: theme.palette?.mode === 'dark' ? '#fff' : '#000',
              fontWeight: 400,
              // marginTop: '30px',
            }}
          >
            恭喜您完成了MyFirstLayer2全部章节内容的学习!
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'start' }}>
          <Typography
            sx={{
              fontSize: { md: '20px', sm: '20px' },
              fontStyle: 'ExtraBold',
              fontFamily: 'Open Sans',
              color: theme.palette?.mode === 'dark' ? '#fff' : '#000',
              fontWeight: 400,
              marginBottom: '30px',
            }}
          >
            为了表彰您的努力与成就，我们特别为您准备了一个结业徽章这个徽章是对您学习成果的认可，也是一份珍贵的荣誉。
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'start' }}>
          <Typography
            sx={{
              fontSize: { md: '20px', sm: '20px' },
              fontStyle: 'ExtraBold',
              fontFamily: 'Open Sans',
              color: theme.palette?.mode === 'dark' ? '#fff' : '#000',
              fontWeight: 400,
              marginBottom: '30px',
            }}
          >
            领取徽章很简单，请您按照以下步骤进行操作：
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'start' }}>
          <Typography
            sx={{
              fontSize: { md: '20px', sm: '20px' },
              fontStyle: 'ExtraBold',
              fontFamily: 'Open Sans',
              color: theme.palette?.mode === 'dark' ? '#fff' : '#000',
              fontWeight: 400,
            }}
          >
            1.在网站主页上点击“connect wallet“按钮，链接钱包；
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'start' }}>
          <Typography
            sx={{
              fontSize: { md: '20px', sm: '20px' },
              fontStyle: 'ExtraBold',
              fontFamily: 'Open Sans',
              color: theme.palette?.mode === 'dark' ? '#fff' : '#000',
              fontWeight: 400,
              marginBottom: '30px',
            }}
          >
            2.于OP testnet水龙头地址领取测试代币；
          </Typography>
        </Box>
        <Box
          sx={{
            height: '218px',
            left: '65px',
            background: '#F6F6F6',
            borderRadius: '18px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: { md: '48px', sm: '48px' },
                fontStyle: 'ExtraBold',
                fontFamily: 'Open Sans',
                color: theme.palette?.mode === 'dark' ? '#fff' : '#000',
                fontWeight: 800,
              }}
            >
              <Link target="_blank" href="https://faucet.paradigm.xyz/">
                <h2 style={{
                  fontSize: '48px',
                  fontFamily: 'Open Sans',
                  fontWeight: 800,
                }}>
                  OP testnet
                </h2>
              </Link>
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: { md: '10px', sm: '10px' },
                fontStyle: 'ExtraBold',
                fontFamily: 'Open Sans',
                color: theme.palette?.mode === 'dark' ? '#fff' : '#777777',
                fontWeight: 400,
              }}
            >
              click here
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'start' }}>
          <Typography
            sx={{
              fontSize: { md: '20px', sm: '20px' },
              fontStyle: 'ExtraBold',
              fontFamily: 'Open Sans',
              color: theme.palette?.mode === 'dark' ? '#fff' : '#000',
              fontWeight: 400,
              marginTop: '30px',
              marginBottom: '10px',
            }}
          >
            3.点击“claim按钮即可成功获得结业徽章!
          </Typography>
        </Box>
        <MintBadge />

        <Box sx={{ display: 'flex', justifyContent: 'start' }}>
          <Typography
            sx={{
              fontSize: { md: '20px', sm: '20px' },
              fontStyle: 'ExtraBold',
              fontFamily: 'Open Sans',
              color: theme.palette?.mode === 'dark' ? '#fff' : '#000',
              fontWeight: 400,

              marginTop: '30px',
              // marginBottom: '10px',
            }}
          >
            到这里，您已经成功地领取了结业徽章!希望这枚徽章能够成为您不断前行的鼓励与动力，也期待您在今后的人生道路上继续保持追求学习的态度，获得更多的成就与荣誉。
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

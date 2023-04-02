import { useEffect, useRef, useState } from 'react';
import { useAccount, useContractWrite, useWaitForTransaction } from 'wagmi';

import { Box, Button } from '@mui/material';
import { Stack } from '@mui/system';

import abi from '../abi.json';
import { uploadPNG } from '../common/ipfs';
import showMessage from '../components/showMessage';

export default function ZksyncSwap({ children, title }) {
  const { address } = useAccount();
  const canvasRef = useRef(null);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [mintLoading, setMintLoading] = useState(false);
  const [modifiedImgSrc, setModifiedImgSrc] = useState('');

  const { data, writeAsync } = useContractWrite({
    address: '0x43c4Ebf956F7804596c333B209Ff246a476594DA',
    abi: abi,
    functionName: 'mint',
    mode: 'recklesslyUnprepared',
  });
  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });
  const handleMint = async () => {
    try {
      setMintLoading(true);
      const response = await fetch('/api/upload/png', {
        method: 'POST',
        body: modifiedImgSrc,
      });
      const body = await response.json();
      const { cid } = body;
      // const cid = await uploadPNG(modifiedImgSrc);
      const data = btoa(
        JSON.stringify({
          name: 'mflayer2-badge',
          description: 'mflayer2-badge',
          image: `ipfs://${cid}`,
        })
      );
      const res = await writeAsync?.({
        recklesslySetUnpreparedArgs: ['data:application/json;base64,' + data],
      });
      console.log(res);
      setMintLoading(false);
    } catch (err) {
      console.log(err);
      showMessage({
        type: 'error',
        title: 'Estimate Fail',
        body: 'You may have already minted or other reason.',
      });
      setMintLoading(false);
    }
  };
  useEffect(() => {
    if (isSuccess) {
      showMessage({
        type: 'success',
        title: `Mint Successfully`,
      });
    }
  }, [isSuccess]);

  useEffect(() => {
    // 获取 canvas 元素和上下文对象
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#1E1E1E';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 在组件加载时，加载图片
    const img = new Image();
    img.src = '/icons/badge.svg';
    img.onload = () => {
      // 将图片绘制到 canvas 上
      ctx.drawImage(img, 0, 0);
      setImgLoaded(true);
    };
  }, []);

  useEffect(() => {
    if (imgLoaded) {
      // 获取 canvas 元素和上下文对象
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      // 在 canvas 上执行绘制操作
      ctx.fillStyle = '#E9E9E9';
      ctx.font = '24px Open Sans';
      ctx.fillText(`timestamp ${new Date().getTime()}`, 100, 488);
      ctx.fillStyle = '#6C6C6C';
      ctx.font = '10px Open Sans';
      ctx.fillText(address, 132, 508);

      // 将修改后的图片转换为 base64 格式
      const modifiedImgSrc = canvas.toDataURL('image/png');
      setModifiedImgSrc(modifiedImgSrc);
    }
  }, [imgLoaded]);

  return (
    <Stack gap={7} marginTop={2} alignItems="center">
      <Box>
        <canvas ref={canvasRef} width={512} height={606}></canvas>
      </Box>

      <Button
        fullWidth
        variant="contained"
        disabled={isLoading | mintLoading}
        onClick={handleMint}
      >
        {isLoading | mintLoading ? 'Minting...' : 'Mint'}
      </Button>
    </Stack>
  );
}

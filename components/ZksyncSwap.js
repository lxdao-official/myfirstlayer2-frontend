import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';
import { useAccount } from 'wagmi';

import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

export default function ZksyncSwap({ children, title }) {
  const { address } = useAccount();
  const canvasRef = useRef(null);
  const imgRef = useRef(null);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [modifiedImgSrc, setModifiedImgSrc] = useState('');

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
      ctx.font = '96px Open Sans';
      ctx.fillText(`timestamp ${new Date().getTime()}`, 402, 1952);
      ctx.fillStyle = '#6C6C6C';
      ctx.font = '40px Open Sans';
      ctx.fillText(address, 530, 2033);

      // 将修改后的图片转换为 base64 格式
      const modifiedImgSrc = canvas.toDataURL('image/png');
      setModifiedImgSrc(modifiedImgSrc);
    }
  }, [imgLoaded]);

  return (
    <Box display="flex" justifyContent="center" marginTop={2}>
      <canvas
        ref={canvasRef}
        width={'2048px'}
        height={'2427px'}
        style={{ zoom: 0.25 }}
      ></canvas>
    </Box>
  );
}

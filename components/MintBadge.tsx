import abi from '../abi.json'
import { CONTRACT_MAP } from '../config/config'
import { ReadContext, ReadContextType } from '../contents/context'
import showMessage from './showMessage'
import { Box, Button, useMediaQuery, useTheme } from '@mui/material'
import { Stack } from '@mui/system'
import { to } from '@react-spring/core'
import { ethers } from 'ethers'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { useContext } from 'react'
import {
	useAccount,
	useBalance,
	useContractWrite,
	useNetwork,
	useSwitchNetwork,
	useWaitForTransaction
} from 'wagmi'

export default function MintBadge() {
	// ATTENTION: Please add the address of the corresponding network.
	const { readData } = useContext(ReadContext) as ReadContextType
	const { read, counter } = readData
	const router = useRouter()

	const { chain = { id: -1 } } = useNetwork();
	const {
		chains,
		isLoading: swichLoading,
		switchNetwork,
	} = useSwitchNetwork()

	const { address = `0x` } = useAccount()
	const theme = useTheme()
	const canvasRef = useRef<HTMLCanvasElement | null>(null)
	const [imgLoaded, setImgLoaded] = useState(false)
	const [mintLoading, setMintLoading] = useState(false)
	const [modifiedImgSrc, setModifiedImgSrc] = useState('')
	const balance = useBalance({
		address,
	})
	const mdScreen = useMediaQuery(theme.breakpoints.up('md'))

	const { data, writeAsync } = useContractWrite({
		address: CONTRACT_MAP[chain.id]?.address,
		abi: abi,
		functionName: 'mint',
		mode: 'recklesslyUnprepared',
		chainId: chain.id,
	})
	const { isLoading, isSuccess } = useWaitForTransaction({
		hash: data?.hash || '0x',
	})
	const toFaucet = () => {
		window.open(CONTRACT_MAP[chain.id]?.facute, '_blank')
	}
	const handleMint = async () => {
		// if (read != counter) {
		//   showMessage({
		//     type: 'error',
		//     title: 'Not eligible for minting',
		//     body: 'Kindly review the entire content before proceeding with minting.',
		//   });
		//   return;
		// }
		if (typeof chain.id == 'undefined') {
			showMessage({
				type: 'error',
				title: 'Please Connect Wallet',
				body: 'Please Connect the Wallet.',
			})
			return
		}
		// 检查chainid是否在CONTRACT_MAP中
		if (!CONTRACT_MAP[chain.id]?.address) {
			showMessage({
				type: 'error',
				title: 'Not Support Chain',
				body: 'Please Switch to Optimism Mainnet or Arbitrum.',
			})
			return
		}
		if (!address) {
			showMessage({
				type: 'error',
				title: 'Please Connect Wallet',
				body: 'Connect Wallet to mint.',
			})
			return
		}
		try {
			setMintLoading(true)
			const response = await fetch('/api/upload/png', {
				method: 'POST',
				body: modifiedImgSrc,
			})
			const body = await response.json()
			const { cid } = body
			const data = btoa(
				JSON.stringify({
					name: 'mflayer2-badge',
					description: 'mflayer2-badge',
					image: `ipfs://${cid}`,
				})
			)
			const rpc = CONTRACT_MAP[chain.id]?.rpc

			const provider = new ethers.providers.JsonRpcProvider(rpc)
			const gasPrice = await provider.getGasPrice()

			const gasUnits = await new ethers.Contract(
				address,
				abi,
				provider
			).estimateGas.mint('data:application/json;base64,' + data)

			const transactionFee = gasPrice.mul(gasUnits).mul(3)
			console.log('transactionFee in wei: ' + transactionFee.toString())
			console.log(
				'transactionFee in ether: ' +
				ethers.utils.formatUnits(transactionFee, 'ether')
			)
			console.log(
				'balance: ',
				balance?.data?.value.toString(),
				transactionFee.toString() > (balance?.data?.value ?? "0").toString()
			)
			if (Number(transactionFee) > Number(balance?.data?.value)) {
				showMessage({
					type: 'error',
					title: 'Estimate Fail',
					body: '您的账户中没有足够的ETH可以支付网络上的交易费用。',
				})
				setMintLoading(false)
				return
			}
			const res = await writeAsync?.({
				recklesslySetUnpreparedArgs: [
					'data:application/json;base64,' + data,
				],
			})
			// console.log(res);
			setMintLoading(false)
		} catch (err) {
			// console.log(err);
			showMessage({
				type: 'error',
				title: 'Estimate Fail',
				body: 'You may have already minted or other reason.',
			})
			setMintLoading(false)
		}
	}
	useEffect(() => {
		if (isSuccess) {
			showMessage({
				type: 'success',
				title: `Mint Successfully`,
			})
		}
	}, [isSuccess])

	useEffect(() => {
		// 获取 canvas 元素和上下文对象
		const canvas = canvasRef.current as HTMLCanvasElement
		const ctx = canvas.getContext('2d')
		if (ctx) {
			ctx.fillStyle = '#1E1E1E'
			ctx.fillRect(0, 0, canvas.width, canvas.height)
		} else {
			console.error("Canvas 2D context is not supported.");
		}


		// 在组件加载时，加载图片
		const img = new Image()
		img.src = '/icons/badge.svg'
		img.onload = () => {
			// 将图片绘制到 canvas 上
			if (ctx) {
				ctx.drawImage(img, 0, 0)
				setImgLoaded(true)
			} else {
				console.error("Canvas 2D context is not supported.");
			}

		}
	}, [])

	useEffect(() => {
		if (imgLoaded) {
			// 获取 canvas 元素和上下文对象
			const canvas = canvasRef.current as HTMLCanvasElement
			const ctx = canvas.getContext('2d')
			if (ctx) {
				// 在 canvas 上执行绘制操作
				ctx.fillStyle = '#E9E9E9'
				ctx.font = '96px Open Sans'
				ctx.fillText(`timestamp ${new Date().getTime()}`, 402, 1902)
				ctx.fillStyle = '#6C6C6C'
				ctx.font = '40px Open Sans'
				ctx.fillText(address.toString(), 530, 2033)
			} else {
				console.error("Canvas 2D context is not supported.");
			}


			// 将修改后的图片转换为 base64 格式
			const modifiedImgSrc = canvas.toDataURL('image/png')
			setModifiedImgSrc(modifiedImgSrc)
		}
	}, [imgLoaded])
	useEffect(() => {
		if (imgLoaded) {
			router.reload()
		}
	}, [address])

	return (
		<Stack
			gap={'28px'}
			marginTop={2}
			alignItems="center"
			sx={{
				borderRadius: '18px',
				paddingY: '28px',
			}}
		>
			<Box sx={{ borderRadius: '18px' }}>
				<canvas
					ref={canvasRef}
					width={2048}
					height={2427}
					style={{
						zoom: mdScreen ? 0.18 : 0.12,
						border: '1px solid #FFFFFF',
						borderRadius: '98px',
					}}
				></canvas>
			</Box>
			{!CONTRACT_MAP[chain.id]?.address ? (
				<Button
					variant="contained"
					disabled={swichLoading}
					onClick={() => switchNetwork?.(chains[0].id)}
					sx={{
						width: '255px',
						height: '64px',
						fontSize: '20px',
						fontWeight: '800',
						textTransform: 'capitalize',
						borderRadius: '18px',
						background: '#000',
						border: '1px solid #FFFFFF',
						'&:hover': {
							backgroundColor: '#333333',
						},
					}}
				>
					{swichLoading ? 'Changing...' : 'Change Network'}
				</Button>
			) : (
				<Button
					variant="contained"
					disabled={isLoading || mintLoading}
					onClick={handleMint}
					sx={{
						width: '255px',
						height: '64px',
						fontSize: '20px',
						fontWeight: '800',
						textTransform: 'capitalize',
						borderRadius: '18px',
						background: '#000',
						border: '1px solid #FFFFFF',
						'&:hover': {
							backgroundColor: '#333333',
						},
					}}
				>
					{isLoading || mintLoading ? 'Claiming...' : 'Claim'}
				</Button>
			)}
			{CONTRACT_MAP[chain.id]?.facute ? (
				<Button
					variant="contained"
					onClick={toFaucet}
					sx={{
						width: '255px',
						height: '64px',
						fontSize: '16px',
						fontWeight: '800',
						textTransform: 'capitalize',
						borderRadius: '18px',
						background: '#fff',
						color: '#000',
						border: '1px solid #333',
						'&:hover': {
							backgroundColor: '#eee',
						},
					}}
				>
					Optimism Goerli Faucet
				</Button>
			) : (
				''
			)}
		</Stack>
	)
}

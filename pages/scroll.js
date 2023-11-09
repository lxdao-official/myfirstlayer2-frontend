import {
	Box,
	Button,
	Divider,
	Paper,
	Step,
	StepContent,
	StepLabel,
	Stepper,
	Typography,
	useTheme,
} from '@mui/material'
import Image from 'next/image'
import * as React from 'react'
import { useSigner, useSendTransaction } from 'wagmi'
import { useAccount, useNetwork, chain, useSwitchNetwork } from 'wagmi'
import { useConnectModal } from '@rainbow-me/rainbowkit'
import Link from 'next/link'
const steps = [
	{
		label: 'Switch your wallet network to "Scroll"',
		description: ``,
	},
	{
		label: 'Deploy a smart contract',
		description: '',
	},
	{
		label: 'Check if you are eligible',
		description: ``,
	},
	{
		label: 'Mint the Scroll Origins NFT',
		description: ``,
	},
]

export default function Scroll() {
	const [activeStep, setActiveStep] = React.useState(0)
	const { isConnected } = useAccount()
	const { chain: currectChain } = useNetwork()
	const { data: signer } = useSigner({
		onError(error) {
			console.log('Error', error)
		},
	})
	const { sendTransaction } = useSendTransaction({
		mode: 'recklesslyUnprepared',
		request: {
			data: '0x6080604052348015600f57600080fd5b5060ac8061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c80632e64cec11460375780636057361d14604c575b600080fd5b60005460405190815260200160405180910390f35b605c6057366004605e565b600055565b005b600060208284031215606f57600080fd5b503591905056fea26469706673582212205774c71bc1f1fa9ac0bd2216cf5308f60b734e4d6647ca359475919ba8422fb564736f6c63430008120033',
		},
		onSuccess(transaction) {
			setActiveStep((prevActiveStep) => prevActiveStep + 1)
		},
	})
	const { chains, switchNetwork } = useSwitchNetwork()
	const { openConnectModal } = useConnectModal()
	React.useEffect(() => {
		if (!isConnected && activeStep >= 1) {
			openConnectModal()
		}
		console.log(chains[2])
		console.log(chain.optimismGoerli)
		if (currectChain?.id != 534352) {
			switchNetwork?.(chains[2].id)
		}
	}, [isConnected, activeStep])
	const handleNext = async () => {
		if (activeStep === 0 && !isConnected) {
			openConnectModal()
		} else if (activeStep == 1) {
			// depoly
			sendTransaction()
		} else if (activeStep === 2) {
			setActiveStep((prevActiveStep) => prevActiveStep + 1)
		} else {
			setActiveStep((prevActiveStep) => prevActiveStep + 1)
		}
	}

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1)
	}

	const titles = {
		en: [
			{ href: '#introduce', title: 'Introduce', target: '_self' },
			{ href: '#content', title: 'Content', target: '_self' },
			{
				href: 'https://lxdao.io/joinus',
				title: 'Join Us',
				target: '_blank',
			},
		],
		zh: [
			{ href: '#introduce', title: '介绍', target: '_self' },
			{ href: '#content', title: '内容', target: '_self' },
			{
				href: 'https://lxdao.io/joinus',
				title: '加入我们',
				target: '_blank',
			},
		],
	}

	function getText(activeStep, index) {
		if (activeStep == 0) {
			return 'Connect Wallet'
		} else
			return index === steps.length - 1 ? 'Wait Dec 15, 2023' : 'Continue'
	}
	return (
		<>
			{/* Nav */}
			<Box
				display="flex"
				alignItems="center"
				justifyContent="center"
				sx={{ pt: 2, background: '#000', height: '10vh' }}
			>
				<Box component={'img'} src="/mfl2-logo-new.svg" />
				<Divider
					orientation="vertical"
					sx={{
						borderColor: '#666',
						height: '16px',
						marginInline: '13px',
					}}
				/>
				<Box component="img" src="/lxdao-logo-white.svg" />
			</Box>
			{/* Main */}
			<Box
				sx={{
					position: 'relative',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					width: '100vw',
					height: '90vh',
					background: 'black',
					gap: 28,
				}}
			>
				{/* left */}
				<Box
					sx={{
						width: '30vw',
						height: '70vh',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'start',
					}}
				>
					<Typography
						sx={{
							color: '#f8c5a2',
							fontSize: '42px',
							fontWeight: '700',
							width: '500px',
						}}
					>
						Mint Scroll Origins NFT
					</Typography>
					<Typography
						sx={{
							color: '#888',
							width: '450px',
							mt: 3,
							textAlign: 'left',
						}}
					>
						Scroll is a Layer 2 scaling solution based on zkEVM
						technology, developed by a team comprising
						cryptographers, engineers, experts, and community
						advocates.
						<Button
							variant="outlined"
							sx={{
								transition: 'all',
								color: '#666',
								':hover': { textDecoration: 'underline' },
							}}
							href="https://scroll.io/blog/scroll-origins-nft"
						>
							Learn more about Scroll 📜
						</Button>
					</Typography>
					<Typography
						sx={{
							color: '#fee7e0',
							width: '450px',
							mt: 3,
							textAlign: 'left',
						}}
					>
						Now Mint the Scroll Origins NFT 👉🏻
					</Typography>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							flexDirection: 'column',
							justifyItems: 'center',
							mt: 3,
						}}
					>
						<Image
							src="/scroll.gif"
							width={300}
							height={300}
							alt="Scroll"
						/>
						<Typography sx={{ color: '#666', fontSize: '13px' }}>
							Scroll Origins NFT
						</Typography>
					</Box>
				</Box>
				<Divider
					orientation="vertical"
					sx={{
						position: 'absolute',
						left: '50%',
						top: '50%',
						transform: 'translate(-50%, -50%)',
						borderColor: '#333',
						height: '80vh',
					}}
				/>
				{/* right */}
				{/* primary-color: #fee7e0 */}
				<Box
					sx={{
						maxWidth: 500,
						background: '#fffdfc',
						padding: 4,
						height: '55vh',
						width: '30vw',
						borderRadius: '6px',
					}}
				>
					<Stepper activeStep={activeStep} orientation="vertical">
						{steps.map((step, index) => (
							<Step key={step.label}>
								<StepLabel
									optional={
										index === 3 ? (
											<Typography variant="caption">
												Last step
											</Typography>
										) : null
									}
									sx={{}}
								>
									<Typography
										sx={{
											textDecoration: 'underline',
											cursor: 'pointer',
											transition: 'all 0.1s',
											fontSize: '16px',
											fontWeight: '600',
											':hover': {
												color: '#f2a364',
											},
										}}
										onClick={() => {
											setActiveStep(index)
										}}
									>
										{step.label}
									</Typography>
								</StepLabel>
								<StepContent>
									<Typography>{step.description}</Typography>
									<Box sx={{ mb: 2 }}>
										<div>
											<Button
												variant="contained"
												onClick={handleNext}
												sx={{ mt: 1, mr: 1 }}
												size="small"
												disabled={index == 3}
											>
												{index == 2 ? (
													<Link
														href="https://scroll.io/developer-nft/check-eligibility"
														target="_blank"
													>
														{getText(
															activeStep,
															index
														)}
													</Link>
												) : (
													getText(activeStep, index)
												)}
											</Button>
											<Button
												disabled={index === 0}
												onClick={handleBack}
												sx={{ mt: 1, mr: 1 }}
												size="small"
											>
												Back
											</Button>
										</div>
									</Box>
								</StepContent>
							</Step>
						))}
					</Stepper>
					{/* {activeStep === steps.length && (
						<Paper square elevation={0} sx={{ p: 3 }}>
							<Typography>
								All steps completed - you&apos;re finished
							</Typography>
							<Button
								size="small"
								variant="contained"
								onClick={handleBack}
								sx={{ mt: 1, mr: 1 }}
							>
								Back
							</Button>
						</Paper>
					)} */}
				</Box>
			</Box>
		</>
	)
}

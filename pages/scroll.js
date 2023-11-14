import { MFL2ConnectButton } from '../components/MFL2ConnectButton'
import { ExpandMore, LinkOutlined, TipsAndUpdates } from '@mui/icons-material'
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Button,
	Divider,
	Step,
	StepContent,
	StepLabel,
	Stepper,
	Typography,
	Link,
} from '@mui/material'
import { useConnectModal } from '@rainbow-me/rainbowkit'
import Image from 'next/image'
import { useSnackbar } from 'notistack'
import * as React from 'react'
import { useSigner, useSendTransaction } from 'wagmi'
import { useAccount, useNetwork, useSwitchNetwork } from 'wagmi'

const steps = [
	{
		label: 'Switch your wallet network to "Scroll"',
		description: [{ title: '', url: '' }],
	},
	{
		label: 'Deploy a smart contract',
		description: [
			{
				title: 'Owlto Finance',
				url: 'https://owlto.finance/rewards/?ref=0xb45e9f74d0a35fe1aa0b78fea03877ef96ae8dd2',
			},
			{
				title: 'Orbiter Finance',
				url: 'https://www.orbiter.finance/?source=Arbitrum&dest=Scroll&token=ETH',
			},
			{
				title: 'Rhino.fi',
				url: 'https://app.rhino.fi/bridge?token=ETH&chainOut=SCROLL&chain=ETHEREUM',
			},
		],
	},
	{
		label: 'Check if you are eligible',
		description: [{ title: '', url: '' }],
	},
	{
		label: 'Mint the Scroll Origins NFT',
		description: [{ title: '', url: '' }],
	},
]

export default function Scroll() {
	const [activeStep, setActiveStep] = React.useState(0)
	const { isConnected } = useAccount()
	const { chain: currectChain } = useNetwork()
	const { enqueueSnackbar } = useSnackbar()
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
		onError(error) {
			if (
				error?.data?.message.includes(
					'err: insufficient funds for gas * price + value'
				)
			) {
				enqueueSnackbar('Insufficient Gas')
			}
		},
	})
	const { chains, switchNetwork } = useSwitchNetwork()
	const { openConnectModal } = useConnectModal()
	const handleNext = async () => {
		if (activeStep === 0) {
			switchNetwork?.(chains[2].id)
			setActiveStep((prevActiveStep) => prevActiveStep + 1)
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

	function getText(activeStep, index) {
		if (activeStep == 0) {
			return 'switch'
		} else
			return index === steps.length - 1 ? 'Wait Dec 15, 2023' : 'Continue'
	}

	return (
		<>
			{/* Nav */}
			<Box
				display="flex"
				alignItems="center"
				justifyContent="space-between"
				sx={{ pt: 2, background: '#000', height: '10vh', px: 24 }}
			>
				<Box display="flex">
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
				<MFL2ConnectButton />
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
						height: '65vh',
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
									{index == 1 ? (
										<Box>
											<Accordion
												sx={{
													backgroundColor: '#fffdfc',
													boxShadow: 'none',
												}}
											>
												<AccordionSummary
													expandIcon={<ExpandMore />}
													aria-controls="panel1a-content"
													id="panel1a-header"
												>
													<Typography
														sx={{
															fontWeight: '600',
															fontSize: '15px',
															borderRadius: '6px',
															color: '#666',
														}}
													>
														<TipsAndUpdates
															sx={{
																fontSize:
																	'15px',
															}}
														/>{' '}
														No Gas Fee? Try Bridges
														below
													</Typography>
												</AccordionSummary>
												<AccordionDetails>
													<Typography
														sx={{
															color: '#888',
														}}
													>
														{step.description.map(
															(item) => (
																<Box
																	key={index}
																>
																	<Link
																		href={
																			item.url
																		}
																		sx={{
																			color: '#888',
																			fontSize:
																				'15px',
																			':hover':
																				{
																					color: '#666',
																				},
																			display:
																				'flex',
																			alignItems:
																				'center',
																			gap: 0.5,
																		}}
																	>
																		<LinkOutlined />
																		{
																			item.title
																		}
																	</Link>
																</Box>
															)
														)}
													</Typography>
												</AccordionDetails>
											</Accordion>
										</Box>
									) : (
										''
									)}

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
				</Box>
			</Box>
		</>
	)
}

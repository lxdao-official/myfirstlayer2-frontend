import {
	Box,
	Button,
	Divider,
	Link,
	Paper,
	Step,
	StepContent,
	StepLabel,
	Stepper,
	Typography,
} from '@mui/material'
import Image from 'next/image'
import * as React from 'react'

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

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1)
	}

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1)
	}

	const handleReset = () => {
		setActiveStep(0)
	}
	return (
		<>
			<Link id="scroll" sx={{ position: 'relative' }}></Link>
			<Box
				sx={{
					position: 'relative',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					width: '100vw',
					height: '100vh',
					minHeight: { md: '830px' },
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
											>
												{index === steps.length - 1
													? 'Finish'
													: 'Continue'}
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
					{activeStep === steps.length && (
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
					)}
				</Box>
			</Box>
		</>
	)
}

import { Box, Link, Typography } from '@mui/material'

export default function Scroll() {
	return (
		<>
			<Link id="scroll" sx={{ position: 'relative' }}></Link>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					width: '100vw',
					height: { xs: '100%', md: '100vh' },
					minHeight: { md: '830px' },
					background: {
						xs: 'no-repeat black right bottom/300px',
						md: 'no-repeat black right bottom/500px',
						lg: 'no-repeat black right bottom/40%',
					},
					py: '64px',
				}}
			>
				<Typography sx={{ color: '#fff' }}>
					Mint Scroll Origins NFT
				</Typography>
			</Box>
		</>
	)
}

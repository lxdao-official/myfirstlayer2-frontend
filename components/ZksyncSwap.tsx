import { Box } from '@mui/material'

export default function ZksyncSwap() {
	return (
		<Box
			display="flex"
			justifyContent="center"
			marginTop={2}
			sx={{ width: { xs: '260px', sm: '330px' }, margin: 'auto' }}
		>
			<Box
				component={'iframe'}
				sx={{
					border: 'none',
					height: '680px',
					width: '330px',
					scale: { xs: '0.9', sm: '1' },
				}}
				src="https://portal.txsync.io/bridge/"
			/>
		</Box>
	)
}

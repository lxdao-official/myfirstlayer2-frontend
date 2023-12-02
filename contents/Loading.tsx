import { CircularProgress } from '@mui/material'

export default function Loading() {
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				height: '100vh',
			}}
		>
			<CircularProgress size={80} color="secondary" />
		</div>
	)
}

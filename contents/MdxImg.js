import { Box } from '@mui/material'

export default function MdxImg({ src, alt }) {
	return (
		<Box
			sx={{
				width: '100%',
				display: 'flex',
				justifyContent: 'center',
				paddingY: '10px',
			}}
		>
			<Box
				component={'img'}
				src={src}
				alt={alt}
				width={{ xs: '100%', md: '60%' }}
				borderRadius="10px"
			/>
		</Box>
	)
}

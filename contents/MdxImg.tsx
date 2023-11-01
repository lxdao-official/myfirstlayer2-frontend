import { Box } from '@mui/material'
interface MdxImgProps {
	src: string;
	alt: string;
}
export default function MdxImg({ src, alt }: MdxImgProps) {
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

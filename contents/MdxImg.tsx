import React from 'react';
import { Box } from '@mui/material'
interface MdxImgProps {
	src: string;
	alt: string;
}
const MdxImg: React.FC<MdxImgProps> = ({ src, alt }) => {
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
export default MdxImg;

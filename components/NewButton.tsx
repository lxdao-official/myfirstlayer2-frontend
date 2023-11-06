import { Box } from '@mui/material'
import React, { ReactNode } from 'react';
interface NewButtonProps {
	type?: string;
	children: ReactNode;
	onClick?: () => void;
}
const NewButton: React.FC<NewButtonProps> = ({ type = 'blue', children, onClick }) => {
	return (
		<Box
			onClick={onClick}
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				padding: { xs: '12px 10px', md: '12px 18px' },
				bgcolor: type === 'blue' ? '#0086f2' : '#1a1a1a',
				color: '#fff',
				fontSize: { xs: '13.5px', sm: '16px' },
				whiteSpace: 'nowrap',
				borderRadius: '6px',
				cursor: 'pointer',
				'&:hover': {
					bgcolor: type === 'blue' ? '#006ec7' : '#0f0f0f',
				},
			}}
		>
			{children}
		</Box>
	)
}
export default NewButton;
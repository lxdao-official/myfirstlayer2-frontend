import Box from '@mui/material/Box'
import React from 'react'
interface ContainerProps {
	children: React.ReactNode
	maxWidth?: string
	paddingX?: number
	paddingY?: {
		lg?: string
		md?: string
		xs?: string
	}
	margin?: string
}
const Container: React.FC<ContainerProps> = ({
	children,
	maxWidth = '1339px',
	paddingX = 2,
	...rest
}) => (
	<Box
		maxWidth={maxWidth}
		width={1}
		margin={'0 auto'}
		paddingX={paddingX}
		{...rest}
	>
		{children}
	</Box>
)

export default Container

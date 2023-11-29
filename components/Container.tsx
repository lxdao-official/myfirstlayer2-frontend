import Box from '@mui/material/Box'
import {  BoxProps } from '@mui/material';

import React from 'react'
const Container: React.FC<BoxProps> = ({
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

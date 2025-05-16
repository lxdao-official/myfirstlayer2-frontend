import Box from '@mui/material/Box'

const Container = ({
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

import { MobileDirectory } from './Directory'
import Progress from './Progress'
import { Box, Hidden } from '@mui/material'
import { ConnectButton } from '@rainbow-me/rainbowkit'

interface BottomNavProps {
	directoryText: string
}
export default function BottomNav(props: BottomNavProps) {
	const { directoryText } = props
	return (
		<><Box
			display="flex"
			height={80}
			alignItems="center"
			justifyContent="space-around"
			paddingX={4}
			marginTop={4}
		>
			<Box>
				<ConnectButton />
			</Box>
			<Box flexGrow={2} marginX="20px">
				<Progress />
			</Box>
			<Hidden smUp>
				<MobileDirectory
					directoryText={directoryText}
				></MobileDirectory>
			</Hidden>
		</Box></>

	)
}

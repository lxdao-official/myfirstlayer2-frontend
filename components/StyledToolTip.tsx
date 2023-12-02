import { Tooltip } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles((theme) => {
	return {
		tooltip: (props: Props) => ({
			marginTop: '10px !important',
			backgroundColor: props.background,
			borderRadius: '18px',
			boxShadow: props.boxShadow,
		}),
		arrow: (props: Props) => ({
			color: props.background,
			fontSize: 16,
			margin: 0,
			'&[data-popper-placement*="top"] $arrow': {
				bottom: '-0.7em',
				'&::before': {
					borderWidth: '0.7em 0.7em 0 0',
					backgroundColor: '#fff',
				},
			},
		}),
	}
})
interface Props {
	background: string
	boxShadow: string
	title: string
	children: React.ReactElement<any, any>
}
const StyledToolTip: React.FC<Props> = (props) => {
	const classes = useStyles(props)
	return (
		<Tooltip
			arrow
			classes={{
				tooltip: classes.tooltip,
				arrow: classes.arrow,
			}}
			{...props}
		/>
	)
}
export default StyledToolTip;
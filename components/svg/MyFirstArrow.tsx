import { useTheme } from '@mui/material'
import React, { SVGProps } from 'react';
interface MyFirstArrowProps extends SVGProps<SVGSVGElement> {
	color: string;
	width?: string;
	height?: string;
}
const MyFirstArrow: React.FC<MyFirstArrowProps> = ({ color, ...rest }) => {
	const theme = useTheme()

	return (
		<svg
			width="21"
			height="12"
			viewBox="0 0 21 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<path
				d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75V5.25ZM20.5303 6.53033C20.8232 6.23744 20.8232 5.76256 20.5303 5.46967L15.7574 0.696699C15.4645 0.403806 14.9896 0.403806 14.6967 0.696699C14.4038 0.989593 14.4038 1.46447 14.6967 1.75736L18.9393 6L14.6967 10.2426C14.4038 10.5355 14.4038 11.0104 14.6967 11.3033C14.9896 11.5962 15.4645 11.5962 15.7574 11.3033L20.5303 6.53033ZM1 6.75H20V5.25H1V6.75Z"
				fill={'#5f6d7e'}
			/>
		</svg>
	)
}
export default MyFirstArrow
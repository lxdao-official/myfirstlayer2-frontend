import React, { SVGProps } from 'react';
interface ArrowProps extends SVGProps<SVGSVGElement> {
	color: string;
	width?: string;
	height?: string;
}
const Arrow: React.FC<ArrowProps> = ({ color, width = '8', height = '5', ...rest }) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 8 5"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<path
				d="M1.59099 0.46967L3.64092 2.5196C3.87529 2.75378 4.25512 2.75382 4.48954 2.5197L6.54062 0.46955C6.8336 0.176704 7.30849 0.176757 7.6014 0.46967C7.89429 0.762563 7.89429 1.23744 7.6014 1.53033L4.91439 4.21734C4.44576 4.68597 3.68596 4.68596 3.21734 4.21734L0.53033 1.53033C0.237437 1.23744 0.237437 0.762563 0.53033 0.46967C0.823223 0.176777 1.2981 0.176777 1.59099 0.46967Z"
				fill={color}
			/>
		</svg>
	)
}
export default Arrow;
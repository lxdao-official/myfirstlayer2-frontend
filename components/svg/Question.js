export default function Question({ width = 19, height = 19, color, ...rest }) {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 26 26"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M25.5 13C25.5 19.9035 19.9035 25.5 13 25.5C6.09649 25.5 0.5 19.9035 0.5 13C0.5 6.09649 6.09649 0.5 13 0.5C19.9035 0.5 25.5 6.09649 25.5 13ZM13 24C19.0751 24 24 19.0751 24 13C24 6.92492 19.0751 2 13 2C6.92492 2 2 6.92492 2 13C2 19.0751 6.92492 24 13 24Z"
				fill={color}
			/>
			<path
				d="M9.5 10C9.5 8.71429 10.8125 7 13 7C15.1875 7 16.5 8.28571 16.5 10.4286C16.5 12.5714 13 13.8571 13 16"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
			<circle cx="13" cy="19" r="1" fill={color} />
		</svg>
	)
}

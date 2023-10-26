export default function Earth({ width = 19, height = 19, color }) {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 26 26"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M25.5 13C25.5 19.9035 19.9035 25.5 13 25.5C6.09649 25.5 0.5 19.9035 0.5 13C0.5 6.09649 6.09649 0.5 13 0.5C19.9035 0.5 25.5 6.09649 25.5 13ZM13 24C19.0751 24 24 19.0751 24 13C24 6.92492 19.0751 2 13 2C6.92492 2 2 6.92492 2 13C2 19.0751 6.92492 24 13 24Z"
				fill={color}
			/>
			<path
				d="M13 24.75C13.852 24.75 14.5656 24.2707 15.1198 23.6232C15.6762 22.9731 16.1434 22.0763 16.5209 21.0334C17.2782 18.9415 17.732 16.1012 17.732 13C17.732 9.89883 17.2782 7.05848 16.5209 4.96656C16.1434 3.92373 15.6762 3.02694 15.1198 2.37677C14.5656 1.72929 13.852 1.25 13 1.25C12.148 1.25 11.4344 1.72929 10.8802 2.37677C10.3238 3.02694 9.8566 3.92373 9.4791 4.96656C8.72182 7.05848 8.26801 9.89883 8.26801 13C8.26801 16.1012 8.72182 18.9415 9.4791 21.0334C9.8566 22.0763 10.3238 22.9731 10.8802 23.6232C11.4344 24.2707 12.148 24.75 13 24.75Z"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M2.70398 9.48H23.2518"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M2.70398 16.52H23.2518"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

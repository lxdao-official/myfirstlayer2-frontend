import { dark, light } from './palette'
import shadows from './shadows'
import { responsiveFontSizes } from '@mui/material'
import { createTheme } from '@mui/material/styles'

const getTheme = (mode) =>
	responsiveFontSizes(
		createTheme({
			palette: mode === 'light' ? light : dark,
			shadows: shadows(mode),
			typography: {
				fontFamily: [
					'PingFang SC',
					'-apple-system',
					'BlinkMacSystemFont',
					'"Segoe UI"',
					'Roboto',
					'"Helvetica Neue"',
					'Arial',
					'sans-serif',
					'"Apple Color Emoji"',
					'"Segoe UI Emoji"',
					'"Segoe UI Symbol"',
					'"Open Sans"',
				].join(','),
				h1: {
					fontSize: '98px',
					lineHeight: 1.02,
					fontWeight: 700,
				},
				h2: {
					fontSize: '56px',
				},
				h3: {
					fontSize: '48px',
				},
				h4: {
					fontSize: '30px',
				},
				h5: {
					fontSize: '28px',
				},
				h6: {
					fontSize: '24px',
				},
				subtitle1: {
					fontSize: '21px',
				},
				subtitle2: {
					fontSize: '18px',
				},
				body1: {
					fontSize: '16px',
				},
				body2: {
					fontSize: '14px',
				},
			},

			zIndex: {
				appBar: 1200,
				drawer: 1300,
			},
			components: {
				MuiInputBase: {
					styleOverrides: {
						root: {
							borderRadius: 5,
						},
					},
				},
				MuiOutlinedInput: {
					styleOverrides: {
						root: {
							borderRadius: 5,
						},
						input: {
							borderRadius: 5,
						},
					},
				},
				MuiCard: {
					styleOverrides: {
						root: {
							borderRadius: 8,
						},
					},
				},
				MuiMenu: {
					styleOverrides: {
						paper: {
							width: '180px',
						},
						list: {
							padding: 0,
						},
					},
				},
			},
		})
	)

export default getTheme

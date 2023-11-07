import { formatChapterTitle } from '../utils'
import { Box, Hidden, Typography, useMediaQuery, useTheme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useTranslations } from 'next-intl'

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		justifyContent: 'space-between',
		// fontFamily: 'Open Sans',
		fontStyle: 'SemiBold',
		fontSize: '18px',
		gap: '20px',
		// [theme?.breakpoints?.down('sm')]: {
		//   // display: 'flex',
		//   flexDirection: 'column',
		// },
	},
	container: {
		background: '#000000',
		height: '100px',
		cursor: 'pointer',
		borderRadius: '8px',
		maxWidth: '479px',
		flex: 1,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',

		padding: '0 25px',

		transition: 'all .3s ease-in-out',
		'-webkit-transition': 'all .3s ease-in-out',
		'&.MuiCard-root:focus-within': {
			border: 'none',
			backgroundImage:
				'linear-gradient(to right, #193275 0%, #1E6A72 100%)',
		},
		'&.Mui-selected': {
			backgroundImage:
				'linear-gradient(to right, #193275 0%, #1E6A72 100%)',
			border: 'none',
		},
		'&:active': {
			border: 'none',
			backgroundImage:
				'linear-gradient(to right, #193275 0%, #1E6A72 100%)',
		},
		'&:hover': {
			backgroundImage:
				'linear-gradient(to right, #3162E8 0%, #3AD5E3 100%)',
			// border: '1px solid #fff',
			boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
		},
		// [theme?.breakpoints?.between('xs', 'sm')]: {
		//   borderRadius: '50px',
		//   height: '60px',
		//   height: '60px',
		//   marginBottom: '15px',
		// },
	},
	content: {
		color: '#fff',
		display: 'flex',
		alignItems: 'center',
		flex: 1,
		justifyContent: 'space-between',
		// [theme.breakpoints?.down('sm')]: {
		//   fontSize: '8px',
		//   padding: '12px',
		// },
	},

	mobileContainer: {
		background: '#000000',
		// height: '50px',
		cursor: 'pointer',
		borderRadius: '6px',
		border: '1px solid #fff',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: '15px',

		// paddingLeft: '25px',
		padding: '12px 25px',
		'&.MuiCard-root:focus-within': {
			border: 'none',
			backgroundImage:
				'linear-gradient(to right, #193275 0%, #1E6A72 100%)',
		},
		// "&.Mui-selected": {
		//   background: "#3C3C3C",
		//   color: "#fff",
		//   border: 'none',
		// },
		'&:hover': {
			backgroundImage:
				'linear-gradient(to right, #3162E8 0%, #3AD5E3 100%)',
			border: '1px solid #fff',
		},
	},
	mobileContent: {
		flex: 1,
		display: 'flex',
		alignItems: 'center',
		color: '#fff',
		justifyContent: 'space-between',
	},
}))
interface chaperDataType {
	currentIndex: number,
	last: string,
	current: string,
	next: string,
	read:number,
	counter:number
}
interface TabChapterProps {
	chapterData?: chaperDataType,
	onTabChapter: (action: string,chapter?:any) => void
}
export default function TabChapter(props: TabChapterProps) {
	const { chapterData, onTabChapter } = props

	const classes = useStyles()
	const t = useTranslations('Directory')
	const handleTabChapter = (action: string) => {
		if (
			(chapterData?.currentIndex === 0 && action === 'last') ||
			(chapterData?.currentIndex === 22 && action === 'next')
		) {
			return
		}
		onTabChapter(action)
	}

	return (
		<>
			<Hidden smDown>
				<Box className={classes.root} {...props}>
					<Box
						className={classes.container}
						onClick={() => handleTabChapter('last')}
					>
						<Box className={classes.content}>
							<Box
								component="img"
								sx={{ rotate: '180deg' }}
								src="/arrow.svg"
							/>

							<Box style={{ paddingLeft: '10px' }}>
								<Typography
									style={{
										fontSize: '18px',
										fontStyle: 'SemiBold',
										fontWeight: 600,
									}}
								>
									{chapterData?.last
										? t(
											formatChapterTitle(
												chapterData?.last
											)
										)
										: t(
											formatChapterTitle(
												chapterData?.current
											)
										)}
								</Typography>
							</Box>
						</Box>
					</Box>

					<Box
						className={classes.container}
						onClick={() => handleTabChapter('next')}
					>
						<Box className={classes.content}>
							<Box>
								<Typography
									style={{
										fontSize: '18px',
										fontStyle: 'SemiBold',
										fontWeight: 600,
									}}
								>
									{t(
										formatChapterTitle(
											chapterData?.next
												? chapterData?.next
												: chapterData?.current
										)
									)}
								</Typography>
							</Box>
							<Box component="img" src="/arrow.svg" />
						</Box>
					</Box>
				</Box>
			</Hidden>

			<Hidden smUp>
				<Box {...props}>
					<Box
						className={classes.mobileContainer}
						onClick={() => onTabChapter('last')}
					>
						<Box className={classes.mobileContent}>
							<Box>
								{/* <Typography style={{ fontSize: '15px', fontStyle: 'SemiBold', fontWeight: 200 }}>{chapterData?.last ? t('previous-chapter') : t('current-chapter')}</Typography> */}
								<Typography
									style={{
										fontSize: '15px',
										fontStyle: 'SemiBold',
										fontWeight: 600,
									}}
								>
									{chapterData?.last
										? t(
											formatChapterTitle(
												chapterData?.last
											)
										)
										: t(
											formatChapterTitle(
												chapterData?.current
											)
										)}
								</Typography>
							</Box>
							<Box
								component="img"
								sx={{ rotate: '270deg' }}
								src="/arrow.svg"
							/>

							{/* <Box fontSize={'8px'}>
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.5 13C3.5 13.2761 3.72386 13.5 4 13.5C4.27614 13.5 4.5 13.2761 4.5 13L3.5 13ZM4.35355 0.646446C4.15829 0.451184 3.84171 0.451184 3.64645 0.646446L0.464466 3.82843C0.269204 4.02369 0.269204 4.34027 0.464466 4.53553C0.659729 4.7308 0.976311 4.7308 1.17157 4.53553L4 1.70711L6.82843 4.53553C7.02369 4.7308 7.34027 4.7308 7.53553 4.53553C7.7308 4.34027 7.7308 4.02369 7.53553 3.82843L4.35355 0.646446ZM4.5 13L4.5 1L3.5 1L3.5 13L4.5 13Z"
                    fill="white"
                  />
                </svg>
              </Box> */}
						</Box>
					</Box>

					<Box
						className={classes.mobileContainer}
						onClick={() => onTabChapter('next')}
					>
						<Box className={classes.mobileContent}>
							<Box>
								{/* <Typography style={{ fontSize: '15px', fontStyle: 'SemiBold', fontWeight: 200 }}>{chapterData?.next ? t('next-chapter') : t('current-chapter')}</Typography> */}
								<Typography
									style={{
										fontSize: '15px',
										fontStyle: 'SemiBold',
										fontWeight: 600,
									}}
								>
									{t(
										formatChapterTitle(
											chapterData?.next
												? chapterData?.next
												: chapterData?.current
										)
									)}
								</Typography>
							</Box>
							<Box
								component="img"
								sx={{ rotate: '90deg' }}
								src="/arrow.svg"
							/>
							{/* <Box fontSize={'8px'}>
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.5 1C3.5 0.723858 3.72386 0.5 4 0.5C4.27614 0.5 4.5 0.723858 4.5 1L3.5 1ZM4.35355 13.3536C4.15829 13.5488 3.84171 13.5488 3.64645 13.3536L0.464466 10.1716C0.269204 9.97631 0.269204 9.65973 0.464466 9.46447C0.659729 9.2692 0.976311 9.2692 1.17157 9.46447L4 12.2929L6.82843 9.46447C7.02369 9.2692 7.34027 9.2692 7.53553 9.46447C7.7308 9.65973 7.7308 9.97631 7.53553 10.1716L4.35355 13.3536ZM4.5 1L4.5 13L3.5 13L3.5 1L4.5 1Z"
                    fill="white"
                  />
                </svg>
              </Box> */}
						</Box>
					</Box>
				</Box>
			</Hidden>
		</>
	)
}

import Container from '../../components/Container'
import Language from '../../components/Language'
import { MFL2ConnectButton } from '../../components/MFL2ConnectButton'
import { ChevronRight } from '@mui/icons-material'
import {
	Box,
	Divider,
	Link as MuiLink,
	Stack,
	Typography,
	useMediaQuery,
	useTheme,
	Tooltip,
	Avatar,
} from '@mui/material'
import { useLocale } from 'next-intl'
import Link from 'next/link'
import React, { useEffect } from 'react'

const Main = ({ children = false }) => {
	const locale = useLocale()
	const theme = useTheme()
	const titles = {
		en: [
			{ href: '#introduce', title: 'Introduce', target: '_self' },
			{ href: '#content', title: 'Content', target: '_self' },
			{
				href: 'https://lxdao.io/joinus',
				title: 'Join Us',
				target: '_blank',
			},
		],
		zh: [
			{ href: '#introduce', title: '介绍', target: '_self' },
			{ href: '#content', title: '内容', target: '_self' },
			{
				href: 'https://lxdao.io/joinus',
				title: '加入我们',
				target: '_blank',
			},
		],
	}
	const partners = [
		{
			id: '0',
			name: 'Optimism',
			logo: '/partners/optimism.png',
			url: 'https://www.optimism.io/',
		},
		{
			id: '1',
			name: 'Arbitrum',
			logo: '/partners/arbitrum.png',
			url: 'https://arbitrum.io/',
		},
		{
			id: '2',
			name: 'Polygon',
			logo: '/partners/polygon.png',
			url: 'https://polygon.technology/',
		},
		{
			id: '3',
			name: 'Base',
			logo: '/partners/base.png',
			url: 'https://base.org/',
		},

		{
			id: '4',
			name: 'Scroll',
			logo: '/partners/scroll.png',
			url: 'https://scroll.io/',
		},
		{
			id: '5',
			name: 'Mantle',
			logo: '/partners/mantle.png',
			url: 'https://www.mantle.xyz/',
		},
		{
			id: '6',
			name: 'Linea',
			logo: '/partners/linea.png',
			url: 'https://linea.build/',
		},
	]

	const smallScreen = useMediaQuery(theme.breakpoints.down('md'))

	useEffect(() => {
		const font = new FontFace(
			'sucaijishikangkangti',
			'url(/font/sucaijishikangkangti-2-webfont.woff2)'
		)
		document.fonts.add(font)
		font.load()
	}, [])

	return (
		<>
			<Box
				id="fixed-header"
				bgcolor={'header.main'}
				zIndex={100}
				width={'100vw'}
				top={0}
				borderBottom="1px solid #272727"
			>
				{smallScreen ? (
					<Container
						display="flex"
						flexDirection="column"
						gap={1}
						alignItems="center"
						paddingY={2}
						width="100%"
					>
						<Stack
							width="100%"
							height="45px"
							direction="row"
							justifyContent="space-between"
						>
							<Box
								display="flex"
								flexDirection="row"
								alignItems="center"
								mr="20px"
							>
								<Box
									component={'img'}
									src="/mfl2-logo-new.svg"
									sx={{ width: { xs: '180px', sm: '220px' } }}
								/>
								<Divider
									orientation="vertical"
									sx={{
										borderColor:
											theme.palette.primary.contrastText,
										height: '20px',
										marginInline: { xs: '5px', sm: '15px' },
									}}
								/>
								<Box
									component="img"
									src="/lxdao-logo-white.svg"
								/>
							</Box>

							<Box
								sx={{ display: 'flex', alignItems: 'center' }}
								zIndex={10}
							>
								<Language
									color={theme.palette.primary.contrastText}
								/>
							</Box>
						</Stack>
						<Box
							width="100%"
							display="flex"
							justifyContent="space-between"
							alignItems="center"
						>
							<Box
								minWidth="175px"
								height="36px"
								justifyContent="start"
								gap={1.5}
								alignItems="center"
								display="flex"
							>
								{/* <Typography
									sx={{
										cursor: 'pointer',
										fontSize: {
											xs: '12px',
											sm: '16px',
										},
										fontWeight: '500',
										textDecoration: 'none',
										color: theme.palette.primary
											.contrastText,
									}}
								>
									Chains
								</Typography> */}
								{titles[locale].map((v, i) => {
									return (
										<Box
											key={i}
											sx={{
												display: 'flex',
												flexDirection: 'column',
												alignItems: 'center',
											}}
										>
											<Typography
												sx={{
													cursor: 'pointer',
													fontSize: {
														xs: '12px',
														sm: '16px',
													},
													fontWeight: '500',
												}}
											>
												<MuiLink
													sx={{
														textDecoration: 'none',
														color: theme.palette
															.primary
															.contrastText,
													}}
													href={v.href}
													target={v.target}
												>
													{v.title}
												</MuiLink>
											</Typography>
										</Box>
									)
								})}
							</Box>
							<MFL2ConnectButton />
						</Box>
					</Container>
				) : (
					<Container
						maxWidth="1307px"
						paddingY="20px"
						display="flex"
						flexDirection="row"
						alignItems="center"
						justifyContent="space-between"
					>
						<Box
							display="flex"
							flexDirection="row"
							alignItems="center"
						>
							<Box component={'img'} src="/mfl2-logo-new.svg" />

							{/* <MFL2 color={theme.palette.primary.contrastText} /> */}
							<Divider
								orientation="vertical"
								sx={{
									borderColor:
										theme.palette.primary.contrastText,
									height: '16px',
									marginInline: '13px',
								}}
							/>
							<Box component="img" src="/lxdao-logo-white.svg" />
							<Box
								sx={{
									left: 0,
									width: 'auto',
									right: 0,
									margin: '0 auto',
									ml: '60px',
								}}
							>
								<Box gap={4} display="flex" alignItems="center">
									{/* TODO: chains section (issue #147 | issue #148) */}
									<Tooltip
										title={
											<Box
												sx={{
													display: 'flex',
													flexDirection: 'column',
													alignItems: 'start',
													justifyContent: 'center',
													gap: 0.5,
													padding: 1.5,
												}}
											>
												{partners.map((partner) => (
													<Box
														key={partners.id}
														sx={{
															display: 'flex',
															alignItems:
																'center',
															justifyContent:
																'center',
															my: 1,
															textDecoration:
																'none',
															cursor: 'pointer',
															width: 150,
														}}
													>
														<Avatar
															alt={partner.name}
															src={partner.logo}
															sx={{
																mr: 1,
																width: 28,
																height: 28,
																objectFit:
																	'contain',
																objectPosition:
																	'center',
															}}
														/>
														<MuiLink
															sx={{
																fontSize:
																	'15px',
																textDecoration:
																	'none',
																color: theme
																	.palette
																	.primary
																	.contrastText,
																cursor: 'pointer',
															}}
															href={partner.url}
														>
															{partner.name}
														</MuiLink>
														<ChevronRight
															sx={{ ml: 'auto' }}
														/>
													</Box>
												))}
											</Box>
										}
										placement="bottom"
										arrow
									>
										<Typography
											sx={{
												textDecoration: 'none',
												cursor: 'pointer',
												fontSize: '15px',
												lineHeight: '1.5',
												fontWeight: '600',
												color: '#fff',
											}}
										>
											Chains
										</Typography>
									</Tooltip>
									{titles[locale].map((v, i) => (
										<Box
											key={i}
											sx={{
												display: 'flex',
												flexDirection: 'column',
												alignItems: 'center',
											}}
										>
											<Typography
												sx={{
													fontSize: '15px',
													lineHeight: '1.5',
													fontWeight: '600',
												}}
											>
												<MuiLink
													sx={{
														textDecoration: 'none',
														color: theme.palette
															.primary
															.contrastText,
														cursor: 'pointer',
													}}
													href={v.href}
													target={v.target}
												>
													{v.title}
												</MuiLink>
											</Typography>
										</Box>
									))}
									<Divider
										orientation="vertical"
										sx={{
											borderColor:
												theme.palette.primary
													.contrastText,
											height: '16px',
											marginInline: '1px',
										}}
									/>
									<Link href="scroll" target="_blank">
										<Box
											sx={{
												display: 'flex',
												flexDirection: 'column',
												alignItems: 'center',
												border: '1px solid #333',
												padding: 1,
												':hover': {
													backgroundColor: '#333',
												},
												transition: 'all 0.2s',
												borderRadius: '6px',
											}}
										>
											<Typography
												sx={{
													fontSize: '15px',
													lineHeight: '1.5',
													fontWeight: '600',
													color: '#fff',
												}}
											>
												📜 Scroll Origins NFT
											</Typography>
										</Box>
									</Link>
								</Box>
							</Box>
						</Box>

						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								gap: 2,
							}}
							zIndex={10}
						>
							{/* <Theme color={theme.palette.primary.contrastText} style={{ cursor: 'pointer' }} onClick={colorMode.toggleColorMode} /> */}
							<Language
								color={theme.palette.primary.contrastText}
							/>

							<MFL2ConnectButton />

							{/* <Question color={theme.palette.primary.contrastText} style={{ margin: '12.5px', marginLeft: '21px' }} /> */}
						</Box>
					</Container>
				)}
			</Box>
			<Box bgcolor="bodyBg.main" component="main" id="main">
				{children}
			</Box>
		</>
	)
}

export default Main

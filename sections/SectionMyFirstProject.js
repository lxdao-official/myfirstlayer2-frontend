import SectionSimpleWrapper from './SectionSimpleWrapper'
import { Box, Card, Grid, Link, Typography, useTheme } from '@mui/material'
import { useLocale, useTranslations } from 'next-intl'
import React from 'react'
import { Pagination } from 'swiper'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'

function MyFirstCard(props) {
	const t = useTranslations('SectionMyFirstProject')
	return (
		<Link href={props.url} target="_blank" underline="none">
			<Box sx={{ width: '100%' }}>
				<Box
					component={'img'}
					src={props.image}
					sx={{
						width: '100%',
						borderRadius: '10px',
						border: '0.5px solid #D3D3D3',
					}}
				/>
				<Typography
					fontSize="22px"
					fontWeight={600}
					color={'#000'}
					mt={3}
					mb={2}
				>
					{props.projectName}
				</Typography>
				<Typography color="#626d7c">{props.description}</Typography>
			</Box>
		</Link>
	)
}

export default function SectionMyFirstProject() {
	const theme = useTheme()
	const t = useTranslations('SectionMyFirstProject')
	const locale = useLocale()
	const myfirstProjects = {
		zh: [
			{
				projectName: 'My First NFT',
				holder: '666 holder',
				image: '/MyFirstNFT.png',
				bigImage: '/MyFirstNFT.png',
				description:
					'MyFirstNFT 是一个针对 Web3 新手的非营利性教学项目。 在学习 Web3、NFT 的潜在价值和安全原则的同时获得免费的 NFT。',
				url: 'https://myfirstnft.info/',
			},
			{
				projectName: 'EIPs.Fun',
				holder: '',
				image: '/EIPsFun.png',
				bigImage: '/EIPsFun.png',
				description:
					'EIPs Fun 是一个让 EIP 变得有趣且易于被开发者采用并促进 EIP 生态系统发展的项目。',
				url: 'https://eips.fun/',
			},
		],
		en: [
			{
				projectName: 'My First NFT',
				holder: '666 holder',
				image: '/MyFirstNFT.png',
				bigImage: '/MyFirstNFT.png',
				description:
					'MyFirstNFT is a non-profit instructional project for Web3 newbies. Get a FREE NFT while learning about Web3, underlying values of NFT, and security principles.',
				url: 'https://myfirstnft.info/',
			},
			{
				projectName: 'EIPs.Fun',
				holder: '',
				image: '/EIPsFun.png',
				bigImage: '/EIPsFun.png',
				description:
					'EIPs Fun is a project for making EIPs fun and easy to be adopted by buidlers and advancing EIP ecosystem development.',
				url: 'https://eips.fun/',
			},
		],
	}
	return (
		<SectionSimpleWrapper
			marginTop={{ xs: 6.875, sm: '120px' }}
			paddingTop="51px"
			paddingBottom={{ xs: '40px', md: '0px' }}
			background="#fff"
			title={t('sectionMyFirst-title-1')}
			desc={t('sectionMyFirst-title-2')}
			childOverflow="visible"
			id="project"
		>
			<Box
				padding={{ xs: 2, sm: 0 }}
				marginTop={{ xs: 0, sm: '50px' }}
				paddingBottom={{ xs: 0, sm: '48px' }}
			>
				<Grid
					sx={{ display: { sm: 'flex', xs: 'none' } }}
					justifyContent="center"
					container
					spacing={{ xs: 3.125, sm: 4 }}
				>
					{myfirstProjects[locale].map((item, i) => (
						<Grid rowGap="32px" item xs={12} sm={6} md={4} key={i}>
							<MyFirstCard theme={theme} {...item} />
						</Grid>
					))}
				</Grid>
				<Grid
					sx={{ display: { sm: 'none', xs: 'flex' } }}
					container
					spacing={{ xs: '15px' }}
				>
					<Swiper
						style={{ marginLeft: '15px', height: '420px' }}
						slidesPerView={1.53}
						centeredSlides={true}
						spaceBetween={15}
						pagination={{
							clickable: true,
						}}
						modules={[Pagination]}
					>
						{myfirstProjects[locale].map((item, i) => (
							<SwiperSlide key={i}>
								<MyFirstCard key={i} {...item} />
							</SwiperSlide>
						))}
					</Swiper>
				</Grid>
			</Box>
		</SectionSimpleWrapper>
	)
}

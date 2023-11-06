import { DIRECTORY_NAME } from '../common/constans'
import Footer from '../components/Footer'
import Content from '../contents/Index'
import Main from '../layouts/Main'
import SectionLXDAOIntro from '../sections/SectionLXDAOIntro'
import SectionMyFirstProject from '../sections/SectionMyFirstProject'
import SectionSponsors from '../sections/SectionSponsors'
import SectionTeam from '../sections/SectionTeam'
import SectionTop from '../sections/SectionTop'
import { getDocBySlug } from '/utils'
import { useTheme } from '@mui/material/styles'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import React from 'react'

export default function Index({ content, directory }) {
	const theme = useTheme()
	return (
		<Main>
			<SectionTop />
			<Content md={<MDXRemote {...content} file={directory} />} />
			<SectionMyFirstProject />
			<SectionSponsors />
			<SectionTeam />
			{/* <SectionLXDAOIntro /> */}
			{/* <Box id="joinus" paddingTop={{ xs: '50px', md: 15 }} marginBottom={{  md: 15 }} paddingX={0}>
        <LXDAOIntroduction imgBackground={`${theme?.palette.bodyBg.main}`} titleColor={theme?.palette?.mode === 'dark' ? '#fff' : '#141414'} detailColor={theme?.palette?.mode === 'dark' ? '#fff' : '#667085'} maxWidth="1240px" xsWidth="326px" />
      </Box> */}
			<Footer />
		</Main>
	)
}

export async function getStaticProps(params) {
	const { locale = 'en' } = params

	const { content, meta } = getDocBySlug(DIRECTORY_NAME[0]?.text, locale)
	const mdxSource = await serialize(content)
	return {
		props: {
			messages: (await import(`../locale/${locale}.json`)).default,
			content: mdxSource,
			meta,
			directory: DIRECTORY_NAME,
		},
	}
}

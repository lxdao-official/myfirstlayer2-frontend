import { DIRECTORY_NAME } from '../common/constans'
import Footer from '../components/Footer'
import Content from '../contents/Index'
import Main from '../layouts/Main'
import SectionMyFirstProject from '../sections/SectionMyFirstProject'
import SectionSponsors from '../sections/SectionSponsors'
import SectionTeam from '../sections/SectionTeam'
import SectionTop from '../sections/SectionTop'
import { getDocBySlug } from '/utils'
import { useTheme } from '@mui/material/styles'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export default function Index({ content, directory }) {
	const theme = useTheme()
	const router = useRouter()
	const isScroll = router.pathname === '/#scroll'

	useEffect(() => {
		console.log(router.pathname)
	}, [router.pathname])

	return (
		<Main>
			<SectionTop />
			<Content md={<MDXRemote {...content} file={directory} />} />
			<SectionMyFirstProject />
			<SectionSponsors />
			<SectionTeam />
			<div data-donate3-cid="bafkreihmg2lnhwcu2qtksrk3bjknwj5zeupemzo274rjbsef7saehdpfry"></div>
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

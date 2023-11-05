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
			<div
				data-donate3-type="embed"
				data-donate3-color="#000"
				data-donate3-title="MyFirstLayer2"
				data-donate3-to-address="0xAcb4313910574b69e8116617105b97993ED8319dF"
				data-donate3-cid="bafkreibcxsyw3jn43gigv3xwemaxfzacay2jvsn2ok4k3obmrun3jsxryy"
			></div>
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

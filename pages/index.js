import React from 'react';

import { GetStaticPropsContext } from 'next';
import { useTranslations, useLocale } from 'next-intl';
import Head from 'next/head';
import Main from '../layouts/Main';

import Example from '../mdx/example.mdx';
import ExampleEn from '../mdx/example.en.mdx';
import ExampleZh from '../mdx/example.zh.mdx';
import getDocBySlug from '/utils';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import MyComponent from '/components/MyComponent';
import Directory from '/components/Directory';
import { Box } from '@mui/material';
import Container from '../components/Container';
import SectionTop from '../sections/SectionTop';
import SectionSponsors from '../sections/SectionSponsors';
import SectionTeam from '../sections/SectionTeam';
import SectionFooter from '../sections/SectionFooter';
// import Progress from '../contents/Progress';
import { LXDAOIntroduction } from 'lxdao-ui';

export default function Index({ content, meta }) {
  const t = useTranslations('Index');
  const locale = useLocale();
  const components = {
    MyComponent,
  };
  return (
    <Main>
      <SectionTop />
      {/* <Progress></Progress> */}
      <Directory md={<MDXRemote components={components} {...content} />} />
      <SectionSponsors />
      <SectionTeam />
      <Box marginBottom={4} paddingX={5}>
        <LXDAOIntroduction maxWidth="1240px" xsWidth="326px" />
      </Box>
      <SectionFooter />
    </Main>
  );
}

export async function getStaticProps({ locale }) {
  const { content, meta } = getDocBySlug('blog', locale);
  const mdxSource = await serialize(content);
  return {
    props: {
      messages: (await import(`../locale/${locale}.json`)).default,
      content: mdxSource,
      meta,
    },
  };
}

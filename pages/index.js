import { LXDAOIntroduction } from 'lxdao-ui';
import { GetStaticPropsContext } from 'next';
import { useLocale, useTranslations } from 'next-intl';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Head from 'next/head';
import React from 'react';

import { Box } from '@mui/material';

import Container from '../components/Container';
import Content from '../contents/Index';
import Main from '../layouts/Main';
import ExampleEn from '../mdx/en/example.en.mdx';
import Example from '../mdx/example.mdx';
import ExampleZh from '../mdx/zh/example.zh.mdx';
import SectionFooter from '../sections/SectionFooter';
import SectionMyFirstProject from '../sections/SectionMyFirstProject';
import SectionSponsors from '../sections/SectionSponsors';
import SectionTeam from '../sections/SectionTeam';
import SectionTop from '../sections/SectionTop';
import Directory from '/components/Directory';
import MyComponent from '/components/MyComponent';
import getDocBySlug from '/utils';

export default function Index({ content, meta }) {
  const t = useTranslations('Index');
  const locale = useLocale();
  const components = {
    MyComponent,
  };
  return (
    <Main>
      <SectionTop />

      <Content md={<MDXRemote components={components} {...content} />} />
      <SectionMyFirstProject />
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

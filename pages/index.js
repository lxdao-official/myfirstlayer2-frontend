import React from 'react';

import { GetStaticPropsContext } from 'next';
import { useTranslations, useLocale } from 'next-intl';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Head from 'next/head';
import Main from '../layouts/Main';

import Example from '../mdx/example.mdx';
import ExampleEn from '../mdx/example.en.mdx';
import ExampleZh from '../mdx/example.zh.mdx';
import getDocBySlug from '/utils';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import MyComponent from '/components/MyComponent';
import { Box } from '@mui/material';
import Container from '../components/Container';
import SectionTop from '../sections/SectionTop';
import SectionTeam from '../sections/SectionTeam';
import SectionFooter from '../sections/SectionFooter';
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
      <Box>
        <Container marginTop={2}>
          <p>{t('description')}</p>
          <ConnectButton />
          <Example />
          --------------------------以上通过md内组件实现翻译----------------------------------
          <br />
          -------------------------以下通过切换md文件实现翻译---------------------------------
          {locale == 'en' && <ExampleEn />}
          {locale == 'zh' && <ExampleZh />}
          <MDXRemote components={components} {...content} />
        </Container>
      </Box>
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

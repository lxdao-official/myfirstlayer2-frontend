import fs from 'fs';
import { LXDAOIntroduction } from 'lxdao-ui';
import { GetStaticPropsContext } from 'next';
import { useLocale, useTranslations } from 'next-intl';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Head from 'next/head';
import path from 'path';
import React from 'react';

import { Box } from '@mui/material';

import Container from '../components/Container';
import MintBadge from '../components/MintBadge';
import ZksyncSwap from '../components/ZksyncSwap';
import CompressText from '../components/animation/CompressText';
import Content from '../contents/Index';
import { getStorage, removeStorage, setStorage } from '../contents/storage';
import Main from '../layouts/Main';
import SectionFooter from '../sections/SectionFooter';
import SectionMyFirstProject from '../sections/SectionMyFirstProject';
import SectionSponsors from '../sections/SectionSponsors';
import SectionTeam from '../sections/SectionTeam';
import SectionTop from '../sections/SectionTop';
import Directory from '/components/Directory';
import MyComponent from '/components/MyComponent';
import CompressAni from '/components/animation/CompressAni';
import { formatDirectory, getDocBySlug } from '/utils';

export default function Index({ content, meta, directory }) {
  const t = useTranslations('Index');
  const locale = useLocale();
  const components = {
    MyComponent,
    CompressAni,
  };
  return (
    <Main>
      <SectionTop />
      <Content
        md={<MDXRemote components={components} {...content} file={directory} />}
      />
      <CompressText />
      {/* <CompressAni /> */}
      <ZksyncSwap />
      <MintBadge />
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
  const directoryPath = path.join(
    process.cwd(),
    '/mdx/zh/MyFirst-Layer2_Content'
  );
  const files = fs.readdirSync(directoryPath);
  const fileNames = files.map((file) => file);
  const directory = formatDirectory(fileNames);

  const { content, meta } = getDocBySlug(directory[0]?.text, locale);
  const mdxSource = await serialize(content);
  return {
    props: {
      messages: (await import(`../locale/${locale}.json`)).default,
      content: mdxSource,
      meta,
      directory,
    },
  };
}

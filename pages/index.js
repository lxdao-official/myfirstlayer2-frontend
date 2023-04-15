import { LXDAOIntroduction } from '@lxdao/lxdao-ui';
import fs from 'fs';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import React from 'react';

import { Box, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import Content from '../contents/Index';
import Main from '../layouts/Main';
import SectionFooter from '../sections/SectionFooter';
import SectionMyFirstProject from '../sections/SectionMyFirstProject';
import SectionSponsors from '../sections/SectionSponsors';
import SectionTeam from '../sections/SectionTeam';
import SectionTop from '../sections/SectionTop';
import { formatDirectory, getDocBySlug } from '/utils';

export default function Index({ content, directory }) {
  const theme = useTheme();
  return (
    <Main>
      <SectionTop />
      <Content md={<MDXRemote {...content} file={directory} />} />
      <SectionMyFirstProject />
      <SectionSponsors />
      <SectionTeam />
      <Box id="joinus" marginBottom={4} paddingX={5}>
        <LXDAOIntroduction titleColor={theme?.palette?.mode === 'dark' ? '#fff' : '#141414'} detailColor={theme?.palette?.mode === 'dark' ? '#fff' : '#667085'} maxWidth="1240px" xsWidth="326px" />
      </Box>
      <SectionFooter />
    </Main>
  );
}

export async function getStaticProps({ locale }) {
  const directoryPath = path.join(process.cwd(), '/mdx/zh');
  const files = fs.readdirSync(directoryPath);
  const fileNames = files.map((file) => file);
  const directory = formatDirectory(fileNames).filter((item) => item.text !== 'TOC' && item.text !== 'README' && item.text !== 'SUMMARY');

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

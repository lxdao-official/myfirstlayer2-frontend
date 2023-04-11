import { ConnectButton } from '@rainbow-me/rainbowkit';
import { test } from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

import { Box, Card, CardActions, CardContent, Grid, Link, Typography } from '@mui/material';

import Container from './Container';
import MyComponent from '/components/MyComponent';

const readStatus = ['/content/read.png', '/content/unread.png'];

const directoryText = [
  [
    { text: '前言（Before Layer2）', main: true },
    { text: '区块链的不可能三角', main: false },
  ],
  [{ text: 'Layer2演进历程', main: true }, { text: '状态通道侧链' }, { text: 'Plasma', main: false }, { text: 'Rollup', main: false }],
  [
    { text: 'Rollup机制与原理', main: true },
    { text: 'Rollup扩容核心原理之一：压缩', main: false },
    { text: 'Optimistic Rollup', main: false },
    { text: 'ZK-Rollup', main: false },
  ],
  [
    { text: 'Layer2未来展望', main: true },
    { text: 'Validium', main: false },
    { text: 'Volition', main: false },
  ],
];

export default function Directory(props) {
  // const components = {
  //   MyComponent,
  // };
  const { md } = props;
  // console.log('props', props);
  return (
    <Container display="flex" justifyContent="space-between" marginTop={4}>
      <Box
        sx={{
          backgroundColor: '#ECECEC',
          width: 920,
        }}
        marginRight={4}
        borderRadius={2}
      >
        <Box padding={8}>
          {/* <MDXRemote {...mdxSource} /> */}
          {/* <MDXRemote components={components} {...mdxSource} /> */}
          {md}
          {/* {test()} */}
        </Box>
      </Box>

      <Box>
        <ConnectButton />
        <Box
          sx={{
            width: 247,
            backgroundColor: '#ECECEC',
          }}
          marginTop={2}
          borderRadius={2}
        >
          <Box>
            <Box>
              {directoryText?.map((row, index) => (
                <Item data={[...row]} key={index} />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

const Item = (props) => {
  const { data } = props;
  return (
    <Box>
      {data?.map((item, index) => (
        <Box key={index} display="flex" paddingLeft={!item?.main ? 4 : 0}>
          <Box marginTop={1}>
            <img src={readStatus[0]} />
          </Box>
          <Box>
            <Typography variant={item?.main ? 'h6' : 'subtitle1'}>{item?.text}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export async function getStaticProps() {
  // MDX text - can be from a local file, database, anywhere
  const source = `---
title: Test
---

Some **mdx** text, with a component<MyComponent />
  `;

  const mdxSource = await serialize(source, { parseFrontmatter: true });
  return { props: { mdxSource } };
}

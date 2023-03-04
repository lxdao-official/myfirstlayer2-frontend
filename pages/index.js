import { GetStaticPropsContext } from 'next';
import { useTranslations, useLocale } from 'next-intl';
import { ConnectButton } from '@rainbow-me/rainbowkit';

import LocaleSwitcher from '/components/LocaleSwitcher';
import PageLayout from '/components/PageLayout';
import Example from '../mdx/example.mdx';
import ExampleEn from '../mdx/example.en.mdx';
import ExampleZh from '../mdx/example.zh.mdx';
import getDocBySlug from '/utils';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';
import MyComponent from '/components/MyComponent';

export default function Index({ content, meta }) {
  const t = useTranslations('Index');
  const locale = useLocale();
  console.log(meta);
  const components = {
    MyComponent,
  };
  return (
    <PageLayout title={t('title')}>
      <p>{t('description')}</p>
      <LocaleSwitcher />
      <ConnectButton />
      <Example />
      --------------------------以上通过md内组件实现翻译----------------------------------
      <br />
      -------------------------以下通过切换md文件实现翻译---------------------------------
      {locale == 'en' && <ExampleEn />}
      {locale == 'zh' && <ExampleZh />}
      <MDXRemote components={components} {...content} />
    </PageLayout>
  );
}

export async function getStaticProps({ locale }) {
  const { content, meta } = getDocBySlug('blog', locale);
  const mdxSource = await serialize(content);
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
      content: mdxSource,
      meta,
    },
  };
}

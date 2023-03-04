import { GetStaticPropsContext } from 'next';
import { useTranslations, useLocale } from 'next-intl';
import { ConnectButton } from '@rainbow-me/rainbowkit';

import LocaleSwitcher from '/components/LocaleSwitcher';
import PageLayout from '/components/PageLayout';
import Example from '../mdx/example.mdx';
import ExampleEn from '../mdx/example.en.mdx';
import ExampleZh from '../mdx/example.zh.mdx';

export default function Index() {
  const t = useTranslations('Index');
  const locale = useLocale();

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
    </PageLayout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
}

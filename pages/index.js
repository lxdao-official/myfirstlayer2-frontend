import { GetStaticPropsContext } from 'next';
import { useTranslations, useLocale } from 'next-intl';
import { ConnectButton } from '@rainbow-me/rainbowkit';

import LocaleSwitcher from '/components/LocaleSwitcher';
import PageLayout from '/components/PageLayout';
import Example from '../mdx/example.mdx';

export default function Index() {
  const t = useTranslations('Index');
  const locale = useLocale();
  console.log(locale);

  return (
    <PageLayout title={t('title')}>
      <p>{t('description')}</p>
      <LocaleSwitcher />
      <ConnectButton />
      <Example />
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

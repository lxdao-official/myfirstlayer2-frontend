import { useTranslations } from 'next-intl';
import Head from 'next/head';
import { ReactNode } from 'react';

export default function PageLayout({ children, title }) {
  const t = useTranslations('PageLayout');

  return (
    <>
      <Head>
        <title>{[title, t('pageTitle')].join(' - ')}</title>
      </Head>
      <div
        style={{
          padding: 24,
          fontFamily: 'system-ui, sans-serif',
          lineHeight: 1.5,
        }}
      >
        <div style={{ maxWidth: 510 }}>
          <h1>{title}</h1>
          {children}
        </div>
      </div>
    </>
  );
}

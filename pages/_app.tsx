import {NextIntlProvider} from 'next-intl';
 
export default function App({Component, pageProps}) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Component {...pageProps} />
    </NextIntlProvider>
  );
}
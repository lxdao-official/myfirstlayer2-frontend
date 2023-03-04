import { useTranslations, useLocale } from 'next-intl';

export default function MdTranslate({ children }) {
  if (typeof children != 'string') {
    throw 'xxx';
  }
  const t = useTranslations('Index');
  return t(children);
}

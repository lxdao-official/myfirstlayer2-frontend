module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  importOrder: [
    '^@next/(.*)$',
    '^@mui/(.*)$',
    '^@mdx-js/(.*)$',
    '^components/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};

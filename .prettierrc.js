module.exports = {
  ...require('eslint-config-mantine/.prettierrc.js'),
  trailingComma: 'es5',
  singleQuote: true,
  tabWidth: 2,
  importOrder: ['^@/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};

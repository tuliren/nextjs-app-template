module.exports = {
  // Prettier 3 requires plugins to be listed explicitly (no more auto-loading).
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  trailingComma: 'es5',
  printWidth: 120,
  singleQuote: true,
  tabWidth: 2,
  importOrder: ['^@/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};

import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import eslintConfigPrettier from 'eslint-config-prettier';
import jestPlugin from 'eslint-plugin-jest';
import storybook from 'eslint-plugin-storybook';

/** @type {import('eslint').Linter.Config[]} */
const config = [
  {
    ignores: [
      '**/*.js',
      'node_modules/**',
      '.next/**',
      '.idea/**',
      'storybook-static/**',
      'coverage/**',
      'next-env.d.ts',
    ],
  },
  // Bundles the Next.js, React, React Hooks, import, jsx-a11y and
  // typescript-eslint flat configs (replaces the old `next/core-web-vitals`
  // + `plugin:import/*` extends from .eslintrc.json).
  ...nextCoreWebVitals,
  {
    files: ['**/*.{ts,tsx}'],
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
      },
    },
    rules: {
      'import/no-cycle': 'error',
      'import/newline-after-import': ['error', { count: 1 }],
      '@typescript-eslint/no-inferrable-types': 'off',
      'prefer-const': 'warn',
    },
  },
  {
    files: ['tests/**/*.{ts,tsx}', '**/*.test.{ts,tsx}'],
    ...jestPlugin.configs['flat/recommended'],
  },
  // Lints Storybook story files (https://github.com/storybookjs/eslint-plugin-storybook).
  ...storybook.configs['flat/recommended'],
  // Keep last: disables ESLint rules that conflict with Prettier.
  eslintConfigPrettier,
];

export default config;

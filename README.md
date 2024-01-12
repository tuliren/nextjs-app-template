# Nextjs App Template

[![Build](https://github.com/tuliren/nextjs-app-template/actions/workflows/build.yaml/badge.svg)](https://github.com/tuliren/nextjs-app-template/actions/workflows/build.yaml)

## Development

### Dev credential

- Add dev credential from `.env.sample`
  ```
  cp .env.sample .env.local
  ```
- Update `.env.local` with credentials from the dev database

### Dev server

- Run
  ```
  corepack enable
  yarn install
  yarn dev
  ```
- Visit `localhost:3000`

### Local script

- Add a `ts` file under [`scripts`](./scripts).
- Run it with `yarn script scripts/<file> [parameters]`.

### Environment Variables

| Env     | `NEXT_PUBLIC_VERCEL_ENV` | `NODE_ENV`    |
|---------|--------------------------|---------------|
| Local   | `undefined`              | `development` |
| Preview | `preview`                | `production`  |
| Prod    | `production`             | `production`  |

### IDE Support

- Setup `eslint` in IntelliJ
    - Go to `Preferences / Language & Frameworks / JavaScript / Code Quality Tools / ESLint`
    - Check `Manual ESLint configuration`
    - Set `ESLint package` to `Detect package and configuration file from the nearest package.json`
        - If you use `Automatic ESLint configuration`, the setting depends on the global format in
          your IntelliJ, which may be different from the setting in this project.
    - [Optional] Check `Run eslint --fix on save`
- Setup `prettier` in IntelliJ
    - Go to `Preferences / Languages & Frameworks / JavaScript / Prettier`
    - Select the `Prettier package` from the `node_modules`.
    - [Optional] Check `On 'Reformat Code' action`
    - [Optional] Check `On save`

# Next.js + Capacitor

## Packages

- Next.js(CSR & SSR)
- Storybook
- Styled-Component
- Tailwind
- MaterialUI
- ESlint (Save on Lint)
- i18n
- Jest
- Husky precommit(Jest)

## Start Guide

### Install from degit

`npx degit yn1323/template#materialui-next <app-name>`

### initialize

`npm i --legacy-peer-deps`

## Development Guide

1. Start Next.js
   `npm run dev`

2. Start Storybook
   `npm run storybook`

## i18n

1. Modify locales/en.ts
2. Use Locale

```tsx
import { useLocale } from '@hooks'
const { t } = useLocale()
const Component = () => <Box>{t('ボタン！')}</Box>
```

## Test

### Jest

1. Run test
   `npm run test`
1. Update snapshot
   `npm run test:update -t <Component DirectoryName>`
1. Coverage
   `npm run test:coverage`

## Release

### SSR

1. Deploy somewhere

### CSR

1. `npm run csr`
2. buil folder

## Build Story book

`npm run build-storybook`

### Use husky in Source Tree

1. Change commit option -> bypass commit hook
1. Command

   ```sh
   # bash:
   echo 'export PATH="/usr/local/bin/:$PATH"' >> ~/.huskyrc
   echo 'source ~/.bash_profile' >> ~/.huskyrc
   # zsh:
   echo 'export PATH="/usr/local/bin/:$PATH"' >> ~/.huskyrc
   echo 'source ~/.zprofile' >> ~/.huskyrc
   ```

### Add Husky Command

https://github.com/typicode/husky/issues/866

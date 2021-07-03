# Next.js + Capacitor

## Packages

- Next.js(CSR & SSR)
- Capacitor
- Storybook
- Styled-Component
- Tailwind
- Ionic
- ESlint (Save on Lint)
- i18n

## Start Guide

### Install from degit

`npx degit yn1323/template#ionic-next <app-name>`

### Required

- `npm install -g ionic cordova @ionic/cli native-run cordova-res`
- Android Studio 4.2+
- Android SDK Settings

### initialize

```sh
npm i --legacy-peer-deps

# Only APK Release
npm run chmod
npm run createkey <Alias>
```

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

## Release

### SSR

1. Deploy somewhere

### CSR

1. `npm run csr`
2. buil folder

### Android Apk

#### Config

1. APK Name
   - app.json
2. APP ID
   - capacitor.config.json
3. Mobile Native Functions
   - app.json

## Release

1. Release Command

   ```sh
   # ja
   npm run release--android
   # en
   npm run release--android--en
   ```

2. Android Studio Build

   1. Build Variants -> android.app: release
   2. Toolbar Build -> Build Bundle(s) / APK(s) -> BuildAPK(s)

3. Encrypt
   `npm run sign--android <Alias of key>`

4. APK file in ./apk

## Build Story book

`npm run build-storybook`

## Others

### Check KeyName

`npm run checkkey <PW>`

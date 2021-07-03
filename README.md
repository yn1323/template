# Next.js + Capacitor

## Packages

- Next.js
- Capacitor
- Storybook
- Styled-Component
- Tailwind
- Ionic
- ESlint (Save on Lint)
- i18n

## Required

`npm install -g ionic cordova`
`npm install -g @ionic/cli native-run cordova-res`

## Start Guide

### initialize

```sh
npm i --legacy-peer-deps
npm run chmod
npm run createkey <Alias>
```

## Development Guide

1. Start Next.js
   `npm run dev`

2. Start Storybook
   `npm run storybook`

## i18n Guide

1. locales/en.ts

## Application Setting

1. app.json

- Enter ja and en application name
- Enter extra permission required in capacitor

2. capacitor.config.json  
   Enter AppId

## Debug

1. Debug in Emulator

`ionic serve`

## Release

1. Command

```sh
# ja
npm run release--android
# en
npm run release--android--en
```

2. Encrypt
   `npm run sign--android <Alias of key>`

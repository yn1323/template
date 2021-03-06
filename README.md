# Ionic x React

## Required
`npm install -g ionic cordova`
`npm install -g @ionic/cli native-run cordova-res`

## Start Guide

## Debug
`ionic serve`

## Publish
1. Command
```sh
ionic build
npx cap copy
npx cap update
ionic capacitor open android
```
2. Change Build Variant to release
3. Bild > Build

## Once Required
```sh
npm run chmod
keytool -genkey -v -keystore .keystore -alias test -keyalg RSA -keysize 2048 -validity 10000
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore .keystore android/app/build/outputs/apk/release/app-release-unsigned.apk test
./zipalign -f -v 4 android/app/build/outputs/apk/release/app-release-unsigned.apk android/app/build/outputs/apk/release/app-release.apk
ionic capacitor add android
```

## .env sample
```
REACT_APP_FIREBASE_API_KEY =
REACT_APP_FIREBASE_AUTH_DOMAIN =
REACT_APP_FIREBASE_PROJECT_ID =
REACT_APP_FIREBASE_STORAGE_BUCKET =
REACT_APP_FIREBASE_MESSAGING_SENDER_ID =
REACT_APP_FIREBASE_APP_ID =

REACT_APP_ADMOB_BANNER_ANDROID =
REACT_APP_ADMOB_INTERSTITIAL_ANDROID =
REACT_APP_ADMOB_REWARDVIDEO_ANDROID =

```


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
keytool -genkey -v -keystore .keystore -alias test -keyalg RSA -keysize 2048 -validity 10000
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore .keystore android/app/build/outputs/apk/release/app-release-unsigned.apk test
./zipalign -f -v 4 android/app/build/outputs/apk/release/app-release-unsigned.apk android/app/build/outputs/apk/release/app-release.apk
ionic capacitor add android
```


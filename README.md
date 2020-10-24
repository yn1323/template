# react-cordova-template

## Installation
### Required
```
npm install -g degit
npm install -g cordova
# keytool, emulator so on...
```

### Get Started
Installation
```
npx degit yn1323/react-cordova-template <app-name>
cd <app-name>
npm install
cd app
npm install
```

Platform
```
cordova platfom add android
cordova platform add ios
```

Change permission to run bat
```
npm run chmod
```

Change display name in package.json

## Debug
### Debug in browser
```
cd app
npm run start
```

### Debug in device
```
npm run build
cordova emulate android or ios
```

## Release

### First time only
#### Create Key
```
npm run createkey <Alias>
```

#### Check Key(when forgot alias)
```
npm run keycheck <Password>
```

### Every release

### Create Release apk
```
npm run release--android <Alias>
npm run release--ios <Alias>
```

### Path to APK
- apk

# Others
## Icon

[App Iconizer - Icon Generator](https://appiconizer.com/)

| Resolution  | Icon size |
|:------- | --------------:|
| ldpi    |        36 x 36 |
| mdpi    |        48 x 48 |
| hdpi    |        72 x 72 |
| xhdpi   |        96 x 96 |
| xxhdpi  |      144 x 144 |
| xxxhdpi |      192 x 192 |

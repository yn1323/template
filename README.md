# cordova-combination

- Cordova x React
- Cordova x Pheanut(Phina.js)

## Installation
### Required
```
npm install -g degit
npm install -g cordova
# keytool, emulator so on...
```

---

## Get Started with Cordova x React
#### Installation
```
npx degit yn1323/template#cordova-combination <app-name>
cd <app-name>
npm install
npx degit yn1323/template#react app
cd app
npm install
```

#### HTML  
/app/public/index.html
Add below inside body tag
```html
<script type="text/javascript" src="cordova.js"></script>
```

#### Change permission to run bat
```
npm run chmod
```

#### Change display name in package.json

#### Use React-router
Sample when using `npx degit yn1323/template#react <app-name>`  
/app/src/constant/route.ts  
Remove comment
```tsx
// Required in Cordova
{
  path: './index.html',
  title: 'Top',
  component: Top,
  showBtmNav: false,
}
```

#### config.xml
#### Add Icon
- /res/icons/android (useful website is in OTHERS)
#### Change
- name
- widget#id
- description
- author
- etc


#### Platform (After fix config.xml)
```
cordova platform add android
cordova platform add ios
```

---

## Get Started with Cordova x Pheanut(Phina.js)
- [Pheanut](https://github.com/yn1323/pheanut)
#### Installation
```
npx degit yn1323/template#cordova-combination <app-name>
cd <app-name>
npm install
mkdir app
cd app
npm init
npm install -D pheanut
node ./node_modules/pheanut/bin
npm install
```

#### HTML  
/app/index.html
Add below inside body tag
```html
<script type="text/javascript" src="cordova.js"></script>
```

#### Change permission to run bat
```
npm run chmod
```

#### Change display name in package.json

#### config.xml
#### Add Icon
- /res/icons/android (useful website is in OTHERS)
#### Change
- name
- widget#id
- description
- author
- etc

#### Platform (After fix config.xml)
```
cordova platform add android
cordova platform add ios
```

---
## Debug
### Debug in browser
```
cd app
npm run start
```

### Debug in emulator
```
npm run emulate--android
npm run emulate--ios
```

### Show emulator debug message
```
adb logcat | grep CONSOLE
```

## Release

### First time only
#### Create Key
```
npm run createkey <Alias>
```

#### Check Key(when forgot alias)
```
npm run checkkey <Password>
```

### Every release

### Create apk
1. Update config.xml widget #version
2. build command
```
npm run release--android <Alias>
npm run release--ios <Alias>
```

### Path to APK
- apk

## Google Admob

### Add Plugin
```sh
cordova plugin add cordova-plugin-admob-free --save --variable ADMOB_APP_ID="<YOUR_ANDROID_ADMOB_APP_ID_AS_FOUND_IN_ADMOB>"
```

### Add .env file below /app
```
# .env file
REACT_APP_ADMOB_BANNER_ANDROID = ca-app-pub-xxx/yyy
REACT_APP_ADMOB_INTERSTITIAL_ANDROID = ca-app-pub-www/zzz
REACT_APP_ADMOB_REWARDVIDEO_ANDROID = ca-app-pub-bbb/aaa
```

---

## Others
## Icon

[App Icon Generator](https://appicon.co/)
[IMB Mobile Foundation docs](https://mobilefirstplatform.ibmcloud.com/tutorials/ja/foundation/8.0/application-development/cordova-apps/adding-images-and-icons/)

| Resolution  | Icon size |
|:------- | --------------:|
| ldpi    |        36 x 36 |
| mdpi    |        48 x 48 |
| hdpi    |        72 x 72 |
| xhdpi   |        96 x 96 |
| xxhdpi  |      144 x 144 |
| xxxhdpi |      192 x 192 |

## Memo
- Network in emulator does not work. Connect to 10.0.2.2 of localhost ?
- Copy zipalign from ~/Library/Android/sdk/build-tools/xxx to project folder if error occurs

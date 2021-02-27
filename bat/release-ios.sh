if [ -z $2 ]; then
  echo 'Error. Please enter <Alias>'
  exit
fi

# change config.xml language
node ./helper/config.js --lang $1

rm ./apk/ios-signed.apk
rm ./apk/ios-release.apk

rm -r ./platforms

cordova platform add ios

cordova build android --release
jarsigner -verbose -keystore .keystore platforms/ios/app/build/outputs/apk/release/app-release-unsigned.apk $2
cp ./platforms/ios/app/build/outputs/apk/release/app-release-unsigned.apk ./apk/

mv ./apk/app-release-unsigned.apk ./apk/ios-signed.apk
echo ios release build succeeded
./zipalign -f -v 4 apk/ios-signed.apk apk/ios-release.apk

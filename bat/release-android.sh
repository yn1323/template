if [ -z $1 ]; then
  echo 'Please enter ja or en'
  exit
fi

echo +++++++++++++release build start+++++++++++++

echo remove old platform file
rm -r ./.gradle
rm -r ./android


echo change capacitor.config.json language
# change config.xml language
node ./bat/config.js --lang $1

echo add platform
ionic capacitor add android

npx cap copy

npx cap sync

# edit ANdroidManifest.xml permission
node ./bat/editAndroidManifest.js

echo open android studio
echo please build in android studio
npx cap open android

echo +++++++++++++release build end+++++++++++++

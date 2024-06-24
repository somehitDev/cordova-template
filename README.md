<h1 align="center">
    Cordova Template
</h1>
<p align="center">
    cordova app template
</p>
<div align="center">
    <a href="https://github.com/oyajiDev/NodeRED.py/blob/main/LICENSE">
        <img src="https://img.shields.io/github/license/oyajiDev/NodeRED.py.svg" alt="MIT License" />
    </a>
</div>
<br/><br/>


## 🛠 usage
### add target platform
- commands are avaiable for all platforms(electron, browser, ios, android).
```zsh
# electron
npm run electron:add
# browser
npm run browser:add
# ios
npm run ios:add
# android
npm run android:add
```

<br/>

### check requirements
```zsh
npm run requirements
```

<br/>

### run target platform
- commands are avaiable for all platforms(electron, browser, ios, android).
```zsh
# electron
npm run electron:run
# browser
npm run browser:run
# ios
npm run ios:emulate
# android
npm run android:emulate
```

<br/>

### build target platform
- commands are avaiable for each platform(electron, ios, android).
```zsh
# electron
npm run electron:build # for debug
npm run electron:release # for release
# ios
npm run ios:build
# android
npm run android:build
```

<br/>

### clean-up target platform
- commands are avaiable for each platform(ios, android).
```zsh
# ios
npm run ios:clean
# android
npm run android:clean
```

<br/>

### icons/splash screen
- icon, splash located in "assets" directory.
- change target file or directory from "package.json".
```zsh
# icon
npm run ready:icon
# splash
npm run ready:splash
```

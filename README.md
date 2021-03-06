# RN-Pixabay
- A React-Native + Redux mobile client that browses images provided by the [Pixabay](https://pixabay.com/) API
- Because this was created via `react-native init`, you can use native iOS and Android code, in addition to JS.

## Requirements
- There's a handful of platform specific dependencies required to run this project.
- Node.js `brew install node@8.3`or later is recommended.
- Native iOS development typically requires MacOS.

Once that's setup, you'll need:
- AndroidStudio & XCode (9.4 or up) + XCode Command Line Tools + [CocoaPods](https://cocoapods.org/)
- This will enable you to run the project on Android/iOS emulators.

Also necessary is a package manager for web development. These two are the most popular:
- [npm](https://www.npmjs.com/) 
- [Yarn](https://yarnpkg.com/)

_Note: I used npm during development

## Local Development
- Install requirements. (above)
- Checkout this repo.
- Install dependencies by running `npm install`
- Run `react-native run-ios` OR `react-native run-android` (The Android emulator will have to be open before running this command)

## Useful Dev Tools
- [React Native Debugger](https://github.com/jhen0409/react-native-debugger) 
- [redux-devTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)

[API documentation](https://pixabay.com/api/docs/)

## Git Process

- This is a public repo. If you want to make improvements, raise a PR on a feature branch.

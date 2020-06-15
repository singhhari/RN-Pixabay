# RN-Pixabay
- A cross-platform mobile client that browses images provided by the [Pixabay](https://pixabay.com/) API

## Requirements
- There's a handful of platform specific dependencies required to run this project.
- Node.js `brew install node@8.3`or later is recommended.

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

[API documentation](https://pixabay.com/api/docs/)

Familiarize yourself with the rules being used in the associated .eslintrc and .stylelintrc.json configs.

There are git pre-commit hooks (implemented using [Husky](https://github.com/typicode/husky) 
and [lint-staged](https://www.npmjs.com/package/lint-staged) to enforce formatting and linting rules.

## Git Process

- This is a public repo. If you want to make improvements, raise a PR on a feature branch.

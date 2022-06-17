# Electron boilerplate

A rich Electron boilerplate that comes with support for TypeScript, jQuery, Sass and Webpack out of the box.  
It's based on the boilerplate template [typescript-webpack](https://www.electronforge.io/templates/typescript-+-webpack-template) from Electron Forge.

The most important improvements I've made to the original template are:
* A more obvious folder structure to separate main, renderer and common environments.
* Fixed preload script not loading since it was not added to `plugin-webpack` config by default ([#686](https://github.com/electron-userland/electron-forge/issues/686)).
* Added jQuery as a dependency.
* Added Sass support.
* Stricter rules for TypeScript and Eslint.
* Default favicon.
* Tray icon and close to tray.
* Show main window when the page has been rendered, to prevent a visual flash ([Electron docs](https://www.electronjs.org/docs/latest/api/browser-window#showing-the-window-gracefully)).
* Added an exposed ContextBridge API example.
* Added some useful functions.
* Added a custom web component example.

# Get started

### Clone this repository
```
git clone https://github.com/bvandevliet/electron-boilerplate.git
cd ./electron-boilerplate
```

### Install dependencies
```
yarn install
```

### Test, build and distribute
Read the [Electron Forge documentation](https://www.electronforge.io/cli).

/**
 * This file is used specifically and only for development. It installs
 * `electron-debug` & `vue-devtools`. There shouldn't be any need to
 *  modify this file, but it can be used to extend your development
 *  environment.
 */

/* eslint-disable */

// Install `electron-debug` with `devtron`
import {BrowserWindow} from "electron";

require('electron-debug')({ showDevTools: true })

// Install `vue-devtools`
require('electron').app.on('ready', () => {
    BrowserWindow.addDevToolsExtension('D:\\downloads\\vue-devtools-dev\\shells\\chrome');
})

// Require `main` process to boot app
require('./index')

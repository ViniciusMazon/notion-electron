const { BrowserWindow, shell } = require('electron')
const path = require('path')
const nativeImage = require('electron').nativeImage

function createWindow () {
  win = new BrowserWindow({
    width: 1400, 
    height: 900,
    icon: nativeImage.createFromPath(__dirname, '../../assets/icons/512x512.png'),
    webPreferences: { 
      preload: path.join(__dirname, 'preload.js')
    },
  })

  win.on('close', event => {
    event.preventDefault()
    win.hide()
  })

  win.webContents.on('new-window', (event, url) => {
    shell.openExternal(url);
    event.preventDefault();
    console.log(document.title())
  });
  
  win.setMenuBarVisibility(false);
  
  const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36'
  win.loadURL('https://www.notion.so/login', { userAgent })

  return win
}

module.exports = {
  createWindow
}

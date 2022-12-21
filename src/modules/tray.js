const { Menu, Tray } = require('electron')
const path = require('path')

function createTray (app) {
  const tray = new Tray(path.join(__dirname, '../../assets/icons/512x512.png'))

  const contextMenu = Menu.buildFromTemplate([
    { label: 'Show', click: function() {
      win.show()
    }},
    { type: 'separator' },
    { label: 'Quit', click: function() {
      app.exit() 
    }}
  ])

  tray.setToolTip('Notion')
  tray.setContextMenu(contextMenu)

  return tray
}

module.exports = {
  createTray
}

const { app, session } = require('electron')
const { createWindow } = require('./modules/notion.js')
const { createTray } = require('./modules/tray.js')

function App() {
  createWindow()
  createTray(app)
}

function clearServiceWorkers() {
  const ses = session.defaultSession;
  ses.flushStorageData();
  ses.clearStorageData({ storages: ['serviceworkers'] });
}

app.on('ready', App)
app.on('before-quit', clearServiceWorkers);
app.on('window-all-closed', () => app.quit());

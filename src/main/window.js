const { app, BrowserWindow } = require('electron');

let mainWindow;

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1024,
    minWidth: 1024,
    height: 720,
    minHeight: 720,
    x: 0,
    y: 0,
    frame: false,
    show: false
  });

  // Open the DevTools.
  if (process.env.NODE_ENV !== 'production')
    mainWindow.webContents.openDevTools();

  // and load the index.html of the app.
  mainWindow.loadURL(OPTIONS.main_url);

  mainWindow.show();

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });

  // Emitted when the page title updated
  mainWindow.on('page-title-updated', () => {});
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});
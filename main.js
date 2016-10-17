const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const {ipcMain} = require('electron');


let mainWindow;

ipcMain.on('sync-messages', (event, arg) => {
    if (arg.type === 'balance'){
        console.log('Balance', arg.balance);        
        event.returnValue = arg.balance;
    }
});

function send(message){
    console.log('sending message',message.type);
    mainWindow.webContents.send('ipc-message',message);
}

function createWindow () {
    // Create the browser window.
    mainWindow = new BrowserWindow(
      {
          width: 1000,
          height: 800
      });

    // and load the index.html of the app.
    mainWindow.loadURL(`file://${__dirname}/pof.html`);

    // Open the DevTools.
    mainWindow.webContents.openDevTools();

    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}

app.on('ready', init);

app.on('window-all-closed', function () {
    app.quit()
});

function init(){
    createWindow();
}
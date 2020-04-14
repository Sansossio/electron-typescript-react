import { BrowserWindow, app } from 'electron'
import * as dotenv from 'dotenv'
import { format } from 'url'
import { join } from 'path'

dotenv.config()

app.on('ready', () => {
  const main = new BrowserWindow()
  const url = format({
    pathname: (join(__dirname, '..', 'public', 'index.html')),
    protocol: 'file',
    slashes: true
  })
  main.loadURL(url)
  main.webContents.openDevTools()
})

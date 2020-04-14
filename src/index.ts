import * as isDev from 'electron-is-dev'
import { BrowserWindow, app } from 'electron'
import * as dotenv from 'dotenv'
import { format } from 'url'
import { join } from 'path'

dotenv.config()

export function baseUrl () {
  if (isDev) {
    return 'http://localhost:3000'
  }
  return format({
    pathname: (join(__dirname, '..', 'build', 'index.html')),
    protocol: 'file',
    slashes: true
  })
}

app.on('ready', () => {
  const main = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    }
  })
  main.loadURL(baseUrl())
  main.webContents.openDevTools()
})

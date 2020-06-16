const { app, BrowserView, BrowserWindow } = require('electron')

const start = () => {
	const defaultWidth = 1024
	const defaultHeight = 576

	// Initialize the About panel on macOS
	if (process.platform === 'darwin') {
		app.setAboutPanelOptions({
			applicationName: 'DI.FM'
		})
	}

	// Create the main application browser window
	const mainWindow = new BrowserWindow({
		width: defaultWidth,
		height: defaultHeight,
		title: 'DI.FM'
	})

	// Quit the application when the main window is closed. This will close all other windows.
	mainWindow.on('close', () => {
		app.quit()
	})

	// Prevent opening of new windows
	mainWindow.webContents.on('new-window', (event) => {
		event.preventDefault()
	})

	// Create the browser view for DI.FM
	const mainView = new BrowserView()
	mainWindow.setBrowserView(mainView)
	mainView.setBounds({
		x: 0,
		y: 0,
		width: defaultWidth,
		height: defaultHeight
	})
	mainView.setAutoResize({
		width: true,
		height: true
		// height: false // Workaround for https://github.com/electron/electron/issues/13468
	})
	mainView.webContents.loadURL('https://www.di.fm')

	// Handle window resize
	mainWindow.on('resize', () => {
		const newBounds = mainWindow.getBounds()
		mainView.setBounds({
			x: 0,
			y: 0,
			width: newBounds.width,
			height: newBounds.height
		})
	})
}

// Electron ready event handlers
app.on('ready', () => {
	// Start the app
	start()
})

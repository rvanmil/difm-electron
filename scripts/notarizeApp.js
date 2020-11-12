const { notarize } = require('electron-notarize')

// This function will notarize the macOS build of the app
// See: https://developer.apple.com/documentation/security/notarizing_your_app_before_distribution
const notarizeApp = async (electronPlatformName, appOutDir, appBundleId, appName) => {
	if (electronPlatformName === 'darwin') {
		await notarize({
			appBundleId,
			appPath: `${appOutDir}/${appName}.app`,
			appleId: process.env.APPLEID,
			appleIdPassword: process.env.APPLEIDPASS,
			ascProvider: process.env.APPLETEAM
		})
	}
}

module.exports = notarizeApp

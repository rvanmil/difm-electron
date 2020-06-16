const notarizeApp = require('./notarizeApp')

// This function implements the afterSign hook
// See: https://www.electron.build/includes/hooks.html#aftersign
const afterSign = async (context) => {
	const { electronPlatformName, appOutDir } = context
	const appBundleId = context.packager.config.appId
	const appName = context.packager.appInfo.productFilename
	await notarizeApp(electronPlatformName, appOutDir, appBundleId, appName)
}

module.exports = afterSign

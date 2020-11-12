# [DI.FM](https://www.di.fm/apps) Electron App

Run [DI.FM](https://www.di.fm/apps) as a desktop app.

## How to build

Run `yarn install` and then run `yarn build`. The binaries will be available from the `dist` folder.

To run the app on macOS it needs to be signed and notarized. You will need an Apple Developer Program subscription and a certificate to make this work.

Copy the certificate p12 file `myapplecertificate.p12` into the root folder of this repo and create a file named `electron-builder.env` and add the following variables to it:

```
APPLEID=your-appleid@icloud.com
APPLEIDPASS=your-appleid-password
APPLETEAM=your-apple-team-short-name
CSC_KEY_PASSWORD=myapplecertificate-p12-password
CSC_LINK=myapplecertificate.p12
CSC_NAME="Apple Developer Certificate Name (ACBD1234)"
```

More info on the build and code signing process [can be found over here](https://www.electron.build).

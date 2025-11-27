# MemoryCloud - Native App Setup with Capacitor

## Overview
MemoryCloud is now ready to be deployed as a native iOS and Android app using Capacitor! Follow these steps to build and run on physical devices or emulators.

## Prerequisites

### For iOS:
- macOS computer
- Xcode installed (from Mac App Store)
- Apple Developer account (for device testing)

### For Android:
- Android Studio installed
- Java Development Kit (JDK) installed

## Setup Steps

### 1. Transfer to GitHub
First, export your project to GitHub:
1. Click "Export to GitHub" in Lovable
2. Clone the repository to your local machine:
```bash
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Build the Web App
```bash
npm run build
```

### 4. Add Native Platforms

**For iOS:**
```bash
npx cap add ios
npx cap update ios
```

**For Android:**
```bash
npx cap add android
npx cap update android
```

### 5. Sync Changes
Whenever you make changes to your code, run:
```bash
npm run build
npx cap sync
```

### 6. Run on Device/Emulator

**For iOS:**
```bash
npx cap open ios
```
This opens Xcode. Click the Play button to run on simulator or connected device.

**For Android:**
```bash
npx cap open android
```
This opens Android Studio. Click Run to launch on emulator or connected device.

Alternatively, you can use:
```bash
npx cap run ios
# or
npx cap run android
```

## Camera & Photo Library Permissions

The app is already configured to request camera and photo library permissions. When users first try to upload photos, they'll see permission prompts.

## Features Available in Native App

✅ **Camera Access** - Take photos directly from the app
✅ **Photo Library** - Access device photo library
✅ **AI Photo Analysis** - Powered by Lovable AI (Gemini)
✅ **Offline Storage** - Photos cached locally
✅ **Push Notifications** - Ready to configure
✅ **Native Performance** - Smooth animations and transitions

## Hot Reload Development

The app is configured with hot reload pointing to:
`https://f50d86f5-6e7e-44c9-9dcc-0b0985063192.lovableproject.com`

This means you can:
1. Run the app on your device
2. Make changes in Lovable
3. See updates instantly without rebuilding

To disable hot reload for production:
1. Open `capacitor.config.ts`
2. Remove the `server` configuration
3. Rebuild with `npm run build && npx cap sync`

## Troubleshooting

**Build fails:**
- Make sure you ran `npm install`
- Try `npm run build` before syncing

**App won't open:**
- Check that Xcode/Android Studio are properly installed
- Try `npx cap sync` again

**Photos not uploading:**
- Check internet connection
- Verify Lovable Cloud is active
- Check console logs in Xcode/Android Studio

**Hot reload not working:**
- Make sure your device and computer are on the same network
- Check that the URL in `capacitor.config.ts` is correct

## Publishing to App Stores

### iOS App Store:
1. Configure signing in Xcode
2. Set bundle ID and app icons
3. Archive and submit via App Store Connect

### Google Play Store:
1. Generate signed APK/AAB in Android Studio
2. Create app listing in Play Console
3. Upload and publish

## Support

For Capacitor-specific issues: https://capacitorjs.com/docs
For Lovable Cloud features: https://docs.lovable.dev

Enjoy your native MemoryCloud app! 📸✨
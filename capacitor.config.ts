import { CapacitorConfig } from '@capacitor/core';

const config: CapacitorConfig = {
  appId: 'app.lovable.memorycloud',
  appName: 'MemoryCloud',
  webDir: 'dist',
  server: {
    url: 'https://f50d86f5-6e7e-44c9-9dcc-0b0985063192.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#E5F2FF',
      showSpinner: false,
    }
  }
};

export default config;
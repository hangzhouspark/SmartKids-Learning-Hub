import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.smartkids.learning',
  appName: 'SmartKids 快乐学习',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
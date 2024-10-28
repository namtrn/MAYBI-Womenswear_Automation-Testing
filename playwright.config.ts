import { PlaywrightTestConfig, defineConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    browserName: 'chromium', // Use 'firefox', 'webkit' for other browsers
    headless: false, // Run in non-headless mode
    baseURL: 'https://maybi.com/', // Base URL for your tests
    viewport: { width: 1280, height: 720 }, // Default viewport size
    screenshot: 'on', // Capture screenshots on failures
    trace: 'on', // Capture trace on failures
  },
};

export default config;

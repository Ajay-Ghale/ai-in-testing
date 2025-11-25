// Playwright configuration for Chromium only
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  globalSetup: require.resolve('./global-setup.js'),
  testDir: './testcases',
  timeout: 30000,
  reporter: [['html', { outputFolder: `test_report/report_${new Date().toISOString().replace(/[:.]/g, '_')}.html`, open: 'never' }]],
});

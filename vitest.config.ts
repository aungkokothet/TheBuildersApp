import { defineConfig } from 'vitest/config'
import path from 'path'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    include: ['**/*.test.ts?(x)'], // allow any .test file
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src') // ✅ THIS IS CRITICAL
    },
  },
  root: '.', // just in case
})

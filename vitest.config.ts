import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      exclude: [
        '**.js',
        '**.ts',
        '**/**.stories.**',
        '**/getMockFrameRequest.ts',
        '**/index.ts',
        '**/mocks.tsx',
        '**/*Svg.tsx',
        '**/types.ts',
        '.storybook/**',
        '.yarn/**',
        'esm/**',
        'framegear/**',
        'node_modules/**',
        'onchainkit/esm/**',
        'playground/**',
        'site/**',
      ],
      reportOnFailure: true,
      thresholds: {
        statements: 99.65,
        branches: 99.65,
        functions: 99.57,
        lines: 99.65,
      },
    },
    environment: 'jsdom',
    exclude: ['**/node_modules/**', 'framegear/**', 'playground/**', 'site/**'],
    setupFiles: ['./vitest.setup.ts'],
    globals: true,
  },
});

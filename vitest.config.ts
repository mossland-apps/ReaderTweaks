import { defineConfig } from 'vitest/config';
import { fileURLToPath } from 'node:url';

const r = (p: string) => fileURLToPath(new URL(p, import.meta.url));

export default defineConfig({
  test: {
    globals: true,
    include: ['tests/**/*.test.ts'],
    environment: 'node',
  },
  resolve: {
    alias: {
      '@lib': r('./src/lib'),
      '@components': r('./src/components'),
    },
  },
});

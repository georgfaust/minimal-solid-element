import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin(),],
  server: { port: 3000 },
  build: {
    lib: {
      entry: './src/my-element.jsx',
      name: 'myElement',
      fileName: (format) => `my-element.${format}.js`,
    },
    target: 'esnext',
  },
});


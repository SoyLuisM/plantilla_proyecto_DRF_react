import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const PORT = `${env.VITE_PORT ?? '5000'}`;
  return {
    server: {
      port: PORT,
    }
  }
  })
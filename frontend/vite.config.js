import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const PORT = `${env.VITE_FRONTEND_INTERN_PORT ?? '5000'}`;
  
  return {
    plugins: [react()],
    server: {
      port: PORT,
      host: '0.0.0.0'
    }
  }
})

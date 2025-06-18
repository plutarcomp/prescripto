import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  server: {
    host: '0.0.0.0',
    allowedHosts: [
      'prescripto.einventiva.dev',  // Agrega aquí el dominio que quieres permitir
      'localhost',                   // Permite también localhost
      '127.0.0.1'                    // Permite también la IP local
    ],
    port: 5173,  
  }
})

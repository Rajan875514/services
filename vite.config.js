import { defineConfig } from "vite"; 
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",  // This ensures correct routing
  server: {
    watch: {
      usePolling: true, // Ensures file changes are detected
    },
    host: true, // Allows access from LAN (optional)
    port: 5173, // Default port (change if needed)
    strictPort: true, // Ensures Vite does not switch ports automatically
  },
});

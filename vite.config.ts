import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, Plugin} from 'vite';

function savePortraitPlugin(): Plugin {
  return {
    name: 'save-portrait-middleware',
    configureServer(server) {
      server.middlewares.use('/api/save-portrait', (req, res) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => {
            body += chunk;
          });
          req.on('end', () => {
            try {
              const data = JSON.parse(body);
              const dataUrl = data.dataUrl || '';
              const base64Match = dataUrl.match(/^data:image\/[a-zA-Z+]+;base64,(.+)$/);
              const base64Data = base64Match
                ? base64Match[1]
                : (dataUrl.includes('base64,') ? dataUrl.split('base64,')[1] : dataUrl);

              if (base64Data) {
                const targetDir = path.resolve(process.cwd(), 'public/images');
                if (!fs.existsSync(targetDir)) {
                  fs.mkdirSync(targetDir, { recursive: true });
                }
                const filePath = path.join(targetDir, 'abdullah-tayseer.jpg');
                fs.writeFileSync(filePath, Buffer.from(base64Data, 'base64'));
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true, path: '/images/abdullah-tayseer.jpg' }));
                return;
              }
              res.writeHead(400, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ error: 'No valid image data provided' }));
            } catch (err: any) {
              res.writeHead(500, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ error: err.message }));
            }
          });
        } else if (req.method === 'GET') {
          const filePath = path.resolve(process.cwd(), 'public/images/abdullah-tayseer.jpg');
          const exists = fs.existsSync(filePath);
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ exists, path: '/images/abdullah-tayseer.jpg' }));
        } else {
          res.writeHead(405).end();
        }
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), savePortraitPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

import { createServer } from 'node:http';
import { menuWithPrices } from '@acme/shared';

const port = Number(process.env.PORT) || 3000;

createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');
  res.setHeader('access-control-allow-origin', '*');
  if (url.pathname === '/health') return res.end('ok');
  if (url.pathname === '/menu') {
    res.setHeader('content-type', 'application/json');
    return res.end(JSON.stringify({ app: 'apps/api', menu: menuWithPrices() }, null, 2));
  }
  res.setHeader('content-type', 'text/plain');
  res.end('Menu API from apps/api. Try /menu\n');
}).listen(port, '0.0.0.0', () => console.log(`api listening on ${port}`));

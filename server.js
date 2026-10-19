const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const files = {
  '/': ['index.html', 'text/html; charset=utf-8'],
  '/index.html': ['index.html', 'text/html; charset=utf-8'],
  '/resume.pdf': ['resume.pdf', 'application/pdf'],
};
const server = http.createServer((req, res) => {
  const pathname = new URL(req.url, 'http://localhost').pathname;
  if (pathname === '/health') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    return res.end('ok');
  }
  const file = files[pathname];
  if (!file) { res.writeHead(404); return res.end('Not found'); }
  const body = fs.readFileSync(path.join(__dirname, 'public', file[0]));
  const headers = {
    'Content-Type': file[1],
    'Content-Length': body.length,
    'Cache-Control': 'no-cache',
    'X-Content-Type-Options': 'nosniff',
  };
  if (pathname === '/resume.pdf') {
    headers['Content-Disposition'] = 'attachment; filename="Dustin_Lambert_Resume.pdf"';
  }
  res.writeHead(200, headers);
  res.end(req.method === 'HEAD' ? undefined : body);
});
server.listen(Number(process.env.PORT || 3000), '0.0.0.0');

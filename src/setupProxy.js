const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://vb-react-exam.netlify.app/api',
      changeOrigin: true,
    })
  );
};
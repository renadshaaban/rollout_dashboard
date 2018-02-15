const env = process.env['NODE_ENV'] || 'development';
const rc = require('rc');

const config =  {
  development: {
    rolloutServiceHost: 'http://localhost',
    rolloutServicePort: '9999',
    port: 1234,
    googleAuth: rc('gauth', {})
  },
  production: {
    rolloutServiceHost: process.env['ROLLOUT_HOST'],
    rolloutServicePort: process.env['ROLLOUT_PORT'],
    port: process.env['ROLLOUT_DASHBOARD_PORT'],
    googleAuth: {
      clientId: process.env['GOOGLE_AUTH_ID']
    }
  }
};

module.exports = config[env];

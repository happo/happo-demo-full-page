const { RemoteBrowserTarget } = require('happo.io');

module.exports = {
  apiKey: process.env.HAPPO_API_KEY,
  apiSecret: process.env.HAPPO_API_SECRET,
  pages: [
    { url: 'https://www.google.com/', title: 'Google' },
    { url: 'https://www.airbnb.com/', title: 'Airbnb' },
  ],

  targets: {
    chrome: new RemoteBrowserTarget('chrome', {
      viewport: '1200x800',
    }),
  },
};

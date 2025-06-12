// Strapi v4: config/middlewares.js
module.exports = [
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      headers: '*',
      origin: [
        'https://gartenprofi-hamburg.de',
        'https://www.gartenprofi-hamburg.de',
        'http://localhost:3000', // für lokale Entwicklung
      ],
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

// Alternative: Alle Origins erlauben (nur für Entwicklung!)
// origin: '*', 
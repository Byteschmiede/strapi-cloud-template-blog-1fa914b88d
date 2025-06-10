// Strapi Cloud Konfiguration für Gartenprofi Hamburg

module.exports = {
  // API Token Konfiguration
  apiToken: {
    // Erstelle diese Tokens im Strapi Cloud Admin Panel
    permissions: {
      // Read permissions
      'api::stadtteil.stadtteil': ['find', 'findOne'],
      'api::service.service': ['find', 'findOne'],
      'api::content.content': ['find', 'findOne', 'create', 'update'],
      'api::referenz.referenz': ['find', 'findOne', 'create', 'update'],
      
      // Component permissions (automatisch mit Content Types)
      'plugin::users-permissions.user': ['find', 'findOne'],
      'plugin::upload.file': ['find', 'findOne', 'create'],
    }
  },

  // CORS Einstellungen für Nuxt Frontend
  cors: {
    enabled: true,
    origin: [
      'https://gartenprofi-hamburg.de',
      'https://www.gartenprofi-hamburg.de',
      'http://localhost:3000', // Entwicklung
      'https://*.netlify.app', // Netlify Preview Deployments
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'HEAD'],
    headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
  },

  // Strapi Cloud spezifische Einstellungen
  strapiCloud: {
    // Deine Strapi Cloud URL (nach dem Deployment)
    url: 'https://steadfast-balance-99b764f168.strapiapp.com',
    
    // Empfohlene Einstellungen für Production
    settings: {
      // Rate Limiting für API
      rateLimit: {
        enabled: true,
        interval: { min: 1 },
        max: 100, // Max requests pro Minute
      },
      
      // Upload Provider (Strapi Cloud nutzt Cloudinary)
      upload: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: process.env.CLOUDINARY_NAME,
          api_key: process.env.CLOUDINARY_KEY,
          api_secret: process.env.CLOUDINARY_SECRET,
        },
      },
    }
  },

  // n8n Integration
  n8n: {
    // Webhook URLs für n8n (optional)
    webhooks: {
      contentCreated: '/api/webhooks/content-created',
      contentUpdated: '/api/webhooks/content-updated',
    },
    
    // API Token für n8n (separates Token empfohlen)
    apiTokenName: 'n8n-content-generator',
  },

  // Seed Data Import Konfiguration
  seedData: {
    // Automatischer Import beim ersten Start
    autoImport: true,
    files: {
      stadtteile: './seed-data/stadtteile.json',
      services: './seed-data/services.json',
    }
  }
}; 
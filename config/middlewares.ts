import type { Core } from '@strapi/strapi';

const cloudinaryDomains = ['https://res.cloudinary.com', 'https://api.cloudinary.com'];

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Middlewares => {
  const allowedOrigins = env.array('CORS_ORIGINS', [
    'http://localhost:3000',
    'http://localhost:1337',
    'https://elmbsol.vercel.app',
  ]);

  return [
    'strapi::logger',
    'strapi::errors',
    {
      name: 'strapi::security',
      config: {
        contentSecurityPolicy: {
          useDefaults: true,
          directives: {
            'connect-src': ["'self'", 'https:', ...cloudinaryDomains],
            'img-src': ["'self'", 'data:', 'blob:', 'market-assets.strapi.io', ...cloudinaryDomains],
            'media-src': ["'self'", 'data:', 'blob:', 'market-assets.strapi.io', ...cloudinaryDomains],
            upgradeInsecureRequests: null,
          },
        },
      },
    },
    {
      name: 'strapi::cors',
      config: {
        origin: allowedOrigins,
        headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
        keepHeaderOnError: true,
      },
    },
    'strapi::poweredBy',
    'strapi::query',
    {
      name: 'strapi::body',
      config: {
        formLimit: '25mb',
        jsonLimit: '10mb',
        textLimit: '10mb',
        formidable: {
          maxFileSize: 25 * 1024 * 1024,
        },
      },
    },
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
  ];
};

export default config;

import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => {
  const hasCloudinaryConfig =
    Boolean(env('CLOUDINARY_NAME')) &&
    Boolean(env('CLOUDINARY_KEY')) &&
    Boolean(env('CLOUDINARY_SECRET'));

  return {
    upload: {
      config: hasCloudinaryConfig
        ? {
            provider: 'cloudinary',
            providerOptions: {
              cloud_name: env('CLOUDINARY_NAME'),
              api_key: env('CLOUDINARY_KEY'),
              api_secret: env('CLOUDINARY_SECRET'),
            },
            actionOptions: {
              upload: {},
              uploadStream: {},
              delete: {},
            },
          }
        : {
            sizeLimit: 25 * 1024 * 1024,
            breakpoints: {
              xlarge: 1920,
              large: 1200,
              medium: 750,
              small: 500,
              xsmall: 64,
            },
            security: {
              allowedTypes: ['image/*', 'application/pdf'],
              deniedTypes: ['application/x-sh', 'application/x-dosexec'],
            },
          },
    },
  };
};

export default config;

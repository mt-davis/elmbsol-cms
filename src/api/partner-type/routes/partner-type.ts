import { factories } from '@strapi/strapi'

export default factories.createCoreRouter('api::partner-type.partner-type', {
  config: {
    find: {
      auth: false,
    },
    findOne: {
      auth: false,
    },
  },
})

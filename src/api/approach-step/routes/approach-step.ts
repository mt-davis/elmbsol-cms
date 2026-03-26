import { factories } from '@strapi/strapi'

export default factories.createCoreRouter('api::approach-step.approach-step', {
  config: {
    find: {
      auth: false,
    },
    findOne: {
      auth: false,
    },
  },
})

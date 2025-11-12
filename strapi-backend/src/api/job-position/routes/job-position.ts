import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::job-position.job-position', {
  config: {
    find: {
      auth: false,
      policies: [],
      middlewares: [],
    },
    findOne: {
      auth: false,
      policies: [],
      middlewares: [],
    },
  },
});

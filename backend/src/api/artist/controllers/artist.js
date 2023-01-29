'use strict'

/**
 * artist controller
 */

const { createCoreController } = require('@strapi/strapi').factories
// Default controller for the `artist` model
// module.exports = createCoreController('api::artist.artist');

// custom controller for the `artist` model

module.exports = createCoreController('api::artist.artist', ({ strapi }) => ({
  async find(ctx) {
    const populateList = ['artistphoto', 'events', 'localizations']
    // Push any additional query params to the array
    populateList.push(ctx.query.populate)
    ctx.query.populate = populateList.join(',')

    const content = await super.find(ctx)
    return content
  },
}))

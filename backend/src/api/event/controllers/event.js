'use strict'

/**
 * event controller
 */

const { createCoreController } = require('@strapi/strapi').factories

// Default controller for the `event` model
module.exports = createCoreController('api::event.event')

// Custom controller for the `event` model

module.exports = createCoreController('api::event.event', ({ strapi }) => ({
  async find(ctx) {
    const populateList = ['image', 'artists', 'localizations']
    // Push any additional query params to the array
    populateList.push(ctx.query.populate)
    ctx.query.populate = populateList.join(',')

    const content = await super.find(ctx)
    return content
  },
}))

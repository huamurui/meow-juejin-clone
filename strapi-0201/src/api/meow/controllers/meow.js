'use strict';

/**
 * meow controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::meow.meow');

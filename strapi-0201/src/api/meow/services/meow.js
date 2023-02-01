'use strict';

/**
 * meow service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::meow.meow');

'use strict';

/**
 * autonomous-car service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::autonomous-car.autonomous-car');

'use strict';

/**
 * wind-turbine service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::wind-turbine.wind-turbine');

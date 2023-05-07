'use strict';

/**
 * subscribed-email service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::subscribed-email.subscribed-email');

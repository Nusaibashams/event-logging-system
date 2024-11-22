const Joi = require('joi');

// Joi schema for event validation
const eventSchema = Joi.object({
    eventType: Joi.string().required(),
    sourceAppId: Joi.string().required(),
    dataPayload: Joi.object().required(),
});

module.exports = { eventSchema };

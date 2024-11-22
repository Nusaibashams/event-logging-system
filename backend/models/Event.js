const mongoose = require('mongoose');

// Define Event schema
const EventSchema = new mongoose.Schema({
    eventType: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
    sourceAppId: { type: String, required: true },
    dataPayload: { type: Object, required: true },
    prevHash: { type: String },
    hash: { type: String, required: true },
});

module.exports = mongoose.model('Event', EventSchema);

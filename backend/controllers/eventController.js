const Event = require('../models/Event');
const { generateHash } = require('../utils/blockchain.js');
const { eventSchema } = require('../utils/validation.js');

// Add event logs
exports.addEvent = async (req, res) => {
    try {
        // Validate event data
        const { error } = eventSchema.validate(req.body);
        if (error) return res.status(400).json({ success: false, message: error.details[0].message });

        const { eventType, sourceAppId, dataPayload } = req.body;

        // Fetch the latest event to get the previous hash
        const latestEvent = await Event.findOne().sort({ _id: -1 });
        const prevHash = latestEvent ? latestEvent.hash : '0';

        // Generate hash for the new event
        const hash = generateHash({ eventType, sourceAppId, dataPayload, prevHash });

        const event = new Event({ eventType, sourceAppId, dataPayload, prevHash, hash });
        await event.save();

        // Emit the new event to all connected clients
        req.io.emit('newEvent', event);

        res.status(201).json({ success: true, event });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

// Get events with filters
exports.getEvents = async (req, res) => {
    try {
        const { eventType, startDate, endDate, sourceAppId } = req.query;
        const filters = {};

        if (eventType) filters.eventType = eventType;
        if (startDate && endDate) filters.timestamp = { $gte: new Date(startDate), $lte: new Date(endDate) };
        if (sourceAppId) filters.sourceAppId = sourceAppId;

        const events = await Event.find(filters).sort({ timestamp: -1 });
        res.status(200).json({ success: true, events });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

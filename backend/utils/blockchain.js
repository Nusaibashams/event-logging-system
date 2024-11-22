const crypto = require('crypto');

// Generate hash for an event
const generateHash = (data) => {
    return crypto.createHash('sha256').update(JSON.stringify(data)).digest('hex');
};

// Verify integrity of the chain
const verifyChain = (events) => {
    for (let i = 1; i < events.length; i++) {
        const expectedHash = generateHash({ ...events[i], prevHash: events[i - 1].hash });
        if (events[i].hash !== expectedHash) return false;
    }
    return true;
};

module.exports = { generateHash, verifyChain };

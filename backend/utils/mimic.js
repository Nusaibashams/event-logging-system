const axios = require('axios');

// Generate random event logs
const mimicEvent = async () => {
    const events = [
        { eventType: 'LOGIN', sourceAppId: 'app1', dataPayload: { user: 'JohnDoe' } },
        { eventType: 'PURCHASE', sourceAppId: 'app2', dataPayload: { item: 'Laptop', price: 1200 } },
        { eventType: 'LOGOUT', sourceAppId: 'app1', dataPayload: { user: 'JohnDoe' } },
    ];

    setInterval(async () => {
        const event = events[Math.floor(Math.random() * events.length)];
        try {
            await axios.post('http://localhost:5000/api/logs', event);
            console.log('Event mimicked:', event);
        } catch (err) {
            console.error('Error mimicking event:', err.message);
        }
    }, 5000); // Send event every 5 seconds
};

module.exports = mimicEvent;

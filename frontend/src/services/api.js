import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5000/api',
});

// Fetch events with optional filters
export const fetchEvents = async (filters = {}) => {
    try {
        const response = await API.get('/logs', { params: filters });
        return response.data.events;
    } catch (error) {
        console.error('Error fetching events:', error.message);
        throw error;
    }
};

// Add an event (for testing only)
export const addEvent = async (event) => {
    try {
        const response = await API.post('/logs', event);
        return response.data.event;
    } catch (error) {
        console.error('Error adding event:', error.message);
        throw error;
    }
};

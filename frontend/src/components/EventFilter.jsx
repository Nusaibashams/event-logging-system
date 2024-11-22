import React, { useState } from 'react';
import { fetchEvents } from '../services/api';

// Style for the Toast (moved outside the Toast component to avoid reference error)
const toastStyle = {
    position: 'fixed',
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '10px 20px',
    backgroundColor: '#f44336',
    color: 'white',
    borderRadius: '5px',
    fontSize: '16px',
    zIndex: '1000',
};

// Toast component to show messages
const Toast = ({ message }) => {
    return (
        <div style={toastStyle}>
            {message}
        </div>
    );
};

const EventFilter = ({ setFilteredEvents }) => {
    const [filters, setFilters] = useState({
        eventType: '',
        sourceAppId: '',
        startDate: '',
        endDate: '',
    });
    const [toastMessage, setToastMessage] = useState(null); // State to hold toast message

    const handleInputChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    const handleSearch = async () => {
        try {
            const events = await fetchEvents(filters);
            if (events.length === 0) {
                setToastMessage('No events found for the given filters');
            } else {
                setFilteredEvents(events);
                setToastMessage(null); // Clear toast if events are found
            }
        } catch (error) {
            console.error('Error fetching filtered events:', error);
        }
    };

    return (
        <div style={{ padding: '20px', background: '#fff', marginBottom: '20px' }}>
            <h3>Filter Events</h3>
            <div>
                <input
                    type="text"
                    name="eventType"
                    placeholder="Event Type"
                    value={filters.eventType}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="sourceAppId"
                    placeholder="Source App ID"
                    value={filters.sourceAppId}
                    onChange={handleInputChange}
                />
                <input
                    type="date"
                    name="startDate"
                    placeholder="Start Date"
                    value={filters.startDate}
                    onChange={handleInputChange}
                />
                <input
                    type="date"
                    name="endDate"
                    placeholder="End Date"
                    value={filters.endDate}
                    onChange={handleInputChange}
                />
                <button onClick={handleSearch}>Search</button>
            </div>

            {/* Render toast message if it exists */}
            {toastMessage && <Toast message={toastMessage} />}
        </div>
    );
};

export default EventFilter;

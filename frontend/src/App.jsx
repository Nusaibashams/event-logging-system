import React, { useState } from 'react';
import EventFilter from './components/EventFilter';

const App = () => {
    const [filteredEvents, setFilteredEvents] = useState([]);

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Event Logging System</h1>
            <EventFilter setFilteredEvents={setFilteredEvents} />
            {filteredEvents.length > 0 ? (
                <div style={{ padding: '20px', background: '#eef' }}>
                    <h2>Filtered Events</h2>
                    {filteredEvents.map((event, index) => (
                        <div key={index} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
                            <strong>Type:</strong> {event.eventType} <br />
                            <strong>Timestamp:</strong> {new Date(event.timestamp).toLocaleString()} <br />
                            <strong>Source:</strong> {event.sourceAppId} <br />
                            <strong>Payload:</strong> {JSON.stringify(event.dataPayload)} <br />
                            <strong>Hash:</strong> {event.hash}
                        </div>
                    ))}
                </div>
            ) : (
              <></>
            )}
        </div>
    );
};

export default App;

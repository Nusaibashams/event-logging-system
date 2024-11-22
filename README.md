# Event Logging System

This project implements a decentralized, tamper-proof event logging system with both backend and frontend components. It includes an API that handles event logging with metadata, cryptographic hashing for tamper-proofing, and various search/query functionalities. The system uses MongoDB, Node.js, and React.

## Features:
- **Event Logging API**: A RESTful API to receive and store event logs with metadata like event type, timestamp, source application, and data payload.
- **Tamper-Proof Design**: Uses cryptographic hashing (like a lightweight blockchain) to link logs, ensuring data integrity.
- **Search and Query**: Filters logs based on event type, source app, and date ranges with pagination support.
- **Scalability**: Uses MongoDB’s sharding and indexing for handling high volumes of data.

## Tech Stack:

- **Backend**:
  - Node.js
  - Express
  - MongoDB
  - Mongoose
  - Joi (for validation)

- **Frontend**:
  - React
  - Vite
  - Axios (for API calls)

## Setup Instructions

Follow these steps to get the project running locally.

### 1. Clone the repository:

Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/event-logging-system.git


#backend setup

cd /backend

# Install backend dependencies
npm install

# Create a .env file and set up the necessary environment variables:
# MONGO_URI=your_mongo_db_connection_string
# PORT=5000
# SECRET_KEY=your_secret_key

# Start the backend server
node server.js


#frontend setup

cd /frontend

# Install frontend dependencies
npm install

# Start the frontend server
npm run dev
![Screenshot (172)](https://github.com/user-attachments/assets/1988f4af-6c81-4923-af9b-76bea84afc04)



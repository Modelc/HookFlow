Webhook Router API
This project is a simple Node.js server that acts as a middleware to route incoming webhooks to multiple destinations. It's designed to receive data from a  provider and forward it to multiple Firebase projects or any other endpoints.

Features
Environment variable support for secure data storage.
Parallel forwarding to improve response time.
Simple error handling and logging.

Getting Started
Prerequisites
Node.js and npm installed. You can download both from the official Node.js website.


Installation

Clone this repository:
git clone <repository-url>
Navigate to the project directory:

cd <project-name>
Install required packages:


npm install
Set up your environment variables. Create a .env file in the root of the project and add the following:

PROJECT_1_URL=https://<your-project-1-url>/webhook
PROJECT_2_URL=https://<your-project-2-url>/webhook
API_KEY=yourapikey

Replace the placeholders with your actual Firebase project URLs and API key.

Running the Server
Start the server by running:
node server.js

Your server should now be running and ready to receive webhook posts.

Usage
To test, you can send a POST request to http://localhost:3000/webhook (assuming you're running the server on the default port 3000) with your desired payload. The server will log the received webhook and forward it to the specified Firebase projects or other endpoints.

Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

License
This project is licensed under the MIT License.


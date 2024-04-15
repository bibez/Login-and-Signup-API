# Login-and-Signup-API
This is a simple RESTful API for user authentication, providing endpoints for user login and signup. It is built using Express.js and Supabase for data storage.

Features
1)User authentication with email and password
2)Secure password storage using hashing
3)User signup with additional information (username, full name, phone number, date of birth, country)
Endpoints
1)POST /login: Endpoint for user login.
Request Body:
{
  "email": "user@example.com",
  "password": "password"
}
Response:
{
  "user": {
    "id": 123,
    "email": "user@example.com",
    "username": "example_user",
    "full_name": "John Doe",
    "phone_number": "+1234567890",
    "date_of_birth": "1990-01-01",
    "country": "USA"
  }
}

2)POST /signup: Endpoint for user signup.
Request Body:

{
  "username": "example_user",
  "email": "user@example.com",
  "password": "password",
  "fullName": "John Doe",
  "phoneNumber": "+1234567890",
  "dateOfBirth": "1990-01-01",
  "country": "USA"
}
Response:

{
  "user": {
    "id": 123,
    "email": "user@example.com",
    "username": "example_user",
    "full_name": "John Doe",
    "phone_number": "+1234567890",
    "date_of_birth": "1990-01-01",
    "country": "USA"
  }
}


Getting Started
1)Clone the repository:
git clone https://github.com/your-username/your-repo.git

2)Install dependencies:
cd your-repo
npm install
Set up environment variables:

3)Create a .env file in the root directory and add the following:
SUPABASE_URL=your-supabase-url
SUPABASE_KEY=your-supabase-key
PORT=3000

4)Run the server:
npm start
The server will start running on port 3000 by default. You can then use the provided endpoints for user authentication.

5)Technologies Used
Express.js
Supabase
JavaScript
HTML/CSS (for the frontend)

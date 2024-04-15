const express = require('express');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Middleware
app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Login Route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const { user, error } = await supabase.auth.signIn({ email, password });
        if (error) {
            return res.status(400).json({ message: error.message });
        }
        return res.status(200).json({ user });
    } catch (error) {
        console.error('Error signing in:', error.message);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

/// Signup Route
app.post('/signup', async (req, res) => {
    const { username, email, password, fullName, phoneNumber, dateOfBirth, country } = req.body;

    try {
        const { user, error } = await supabase.auth.signUp({ email, password });
        if (error) {
            return res.status(400).json({ message: error.message });
        }
        // Insert user data into the users table
        const { data, error: dbError } = await supabase
            .from('users')
            .insert([{ username, email, password, full_name: fullName, phone_number: phoneNumber, date_of_birth: dateOfBirth, country }]);
        if (dbError) {
            return res.status(500).json({ message: 'Error storing user data' });
        }
        return res.status(201).json({ user });
    } catch (error) {
        console.error('Error signing up:', error.message);
        return res.status(500).json({ message: 'Internal server error' });
    }
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, JS) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); // Change 'index.html' to your main HTML file
});

// Route for the login form submission
app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    res.send('Login successful!'); 
});

// Route for the signup form submission
app.post('/signup', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    console.log("Signup data:", { email, password });
    res.status(200).send(`Signup successful using ${email}!`);
});

//Contact Form
// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (your HTML file with the contact form, if located in a "public" folder)
app.use(express.static('public'));

// Handle form submission
app.post("/submit_contact_form", (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).send("Please fill out all fields.");
    }

    // Log the form data for debugging purposes (optional)
    console.log("Form submitted:", { name, email, message });

    // Send a success response to the client
    res.status(200).send("Thank you for your message! Form submitted successfully.");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

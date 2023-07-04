const express = require("express");
const mailjet = require("node-mailjet");

const app = express();

// Parse JSON body
app.use(express.json());

// Initialize Mailjet client with your API key and secret
const client = mailjet.connect(
  process.env.MAILJET_API_KEY,
  process.env.MAILJET_API_SECRET
);

// Create a route to handle the form submission
app.post("/api/send-email", async (req, res) => {
// Get the input data from the request body
const { name, email, subject, message } = req.body;

// Validate the input data
if (!name || !email || !subject || !message) {
  return res.status(400).json({ message: "Please fill all the fields" });
}

// Create an email object
const emailToSend = {
  From: {
    Email: "test@mailjet.com",
    Name: "Test",
  },
  To: [
    {
      Email: "test@example.com",
      Name: "Test",
    },
  ],
  Subject: subject,
  TextPart: message,
  HTMLPart: `<p>${message}</p>`,
};

// Call the Mailjet API with the email object
try {
  const result = await client
    .post("send", { version: "v3.1" })
    .request({ Messages: [emailToSend] });
  // Send a success response with the result
  res.status(200).json({ message: "Email sent successfully" });
} catch (err) {
  // Send an error response with the error message
  res.status(500).json({ message: err.message });
}

});

// Start the server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});

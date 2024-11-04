const express = require("express");
const cors = require("cors"); // Import the cors package
const app = express();
const port = process.env.PORT || 3000;

// Configure CORS to allow requests from the specified origin
app.use(
  cors({
    origin: "https://www.imdb.com", // Allow requests from IMDb
    methods: ["GET"], // Specify allowed methods (GET, POST, etc.)
    allowedHeaders: ["Content-Type"], // Specify allowed headers
  })
);

// API endpoint to get the TLD
app.get("/get-tld", (req, res) => {
  res.json({ tld: "io" }); // Replace "io" with any default TLD you want
});

// Start the server
app.listen(port, () => {
  console.log(`TLD API running on port ${port}`);
});

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// API endpoint to get the TLD
app.get("/get-tld", (req, res) => {
  res.json({ tld: "xyz" }); // Replace "xyz" with any default TLD you want
});

// Start the server
app.listen(port, () => {
  console.log(`TLD API running on port ${port}`);
});

const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// Example route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
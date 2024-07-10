import express from "express";
import serverless from "serverless-http";

const app = express();

// Add a route for the root path
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the API" });
});

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello, World!" });
});

app.get("/api/time", (req, res) => {
  res.json({ currentTime: new Date().toISOString() });
});

// Add this catch-all route at the end
app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

const handler = serverless(app);

export { handler };

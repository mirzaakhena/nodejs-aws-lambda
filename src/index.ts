import { APIGatewayProxyHandler, APIGatewayProxyResult } from "aws-lambda";
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

const serverlessHandler = serverless(app);

// Wrap the serverless handler to process API Gateway events
export const handler: APIGatewayProxyHandler = async (event, context) => {
  // Log the incoming event for debugging
  console.log("Received event:", JSON.stringify(event, null, 2));

  // Process the event with the serverless-http wrapper
  const result = await serverlessHandler(event, context);

  // Log the result for debugging
  console.log("Handler result:", JSON.stringify(result, null, 2));

  return result as APIGatewayProxyResult;
};

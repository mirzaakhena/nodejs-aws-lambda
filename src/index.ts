// src/index.ts
import express from "express";
import serverless from "serverless-http";

const app = express();

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello, World!" });
});

app.get("/api/time", (req, res) => {
  res.json({ currentTime: new Date().toISOString() });
});

const handler = serverless(app);

export { handler };

// const serverlessHandler = serverless(app);

// export const handler: APIGatewayProxyHandler = async (event: APIGatewayEvent, context: Context) => {
//   const result = await serverlessHandler(event, context);
//   return result as any;
// };

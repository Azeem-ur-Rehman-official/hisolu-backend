import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/contactRoute";


dotenv.config();
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "https://hisolution.netlify.app"],
  })
);
// database connection
app.use(router);

// Export the app for Vercel serverless
export default app;

// Only listen when running locally (not on Vercel)
if (!process.env.VERCEL) {
  const port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log(`APP IS RUNNING ON PORT ${port}`);
  });
}

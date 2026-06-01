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

const port = process.env.PORT || 5000;
// to run surver

app.listen(port, async () => {
  console.log(`APP IS RUNNING ON PORT ${port}`);
 
});

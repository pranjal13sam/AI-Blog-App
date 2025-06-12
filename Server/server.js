import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import adminRouter from "./routes/adminRoute.js";
import blogRouter from "./routes/blogRoute.js";

const app = express();
await connectDB();

//Middlewares:
app.use(cors());
app.use(express.json());

//Routes:
app.get("/", (req, res) => res.send("Server is running"));

app.use("/api/admin", adminRouter);
app.use('/api/blog',blogRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server is running on Port: ${PORT}`);
});

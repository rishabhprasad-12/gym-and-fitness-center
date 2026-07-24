import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";

import express from "express";
import cors from "cors";

dotenv.config();

// Connect Database
connectDB();

import authRoutes from "./routes/auth.route.js";
import membershipPlanRoutes from "./routes/membershipPlan.routes.js";
import errorMiddleware from "./middleware/errorMiddleware.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/membership-plan", membershipPlanRoutes)

app.use(errorMiddleware);

// app.get("/", (req, res) => {
//     res.send({
//         success: true,
//         message: "GET route is working",
//     })
// })

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`);
})

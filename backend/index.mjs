import dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();

app.get("/", (req, res) => {
    res.send({
        success: true,
        message: "GET route is working",
    })
})

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`);
})

import dotEnv from "dotenv"
import express from "express"
import connectDB from "./config/db.js"
import formRoutes from "./routes/formRoutes.js"
import authRoutes from "./routes/authRoutes.js"
import cors from "cors"

dotEnv.config()
connectDB()

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/v1/form", formRoutes)
app.use("/api/v1/auth", authRoutes)

const port = 8080 || process.env.PORT

app.listen(port, () => {
    console.log(`Server Runnung on mode ${port}`);
})
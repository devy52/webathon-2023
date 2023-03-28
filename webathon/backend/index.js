import express from "express";
import sequelize from "./config/database.js";
import cors from "cors";
import StartupRouter from "./routes/startupRoute.js";
import userRouter from "./routes/userRoute.js";
const app = express()
const port = 8080
try {
    await sequelize.authenticate();
    sequelize.sync({force:true});
    console.log('Database connected...');
} catch (error) {
    console.error('Connection error:', error);
}
app.use(cors());
app.use(express.json())
app.use('/startup',StartupRouter);
app.use('/users',userRouter);
app.listen(port, () => console.log(`app listening on port ${port}!`))
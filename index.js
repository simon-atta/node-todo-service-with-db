import express from 'express'
import expressConfig from './config/expressConfig.js'
import router from './routes/router.js'
import dotenv from "dotenv"
import mongoose from "mongoose"



mongoose.connect('mongodb+srv://sandbox-user:M9DiZZYvpqRNNlU6@cluster0.0gjsx.mongodb.net/todoapp',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});

dotenv.config()
const app = express()

const PORT = process.env.PORT
expressConfig(app)
router(app)



app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})

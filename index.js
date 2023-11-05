import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
// import connectDB from "./config.js";
import dotenv from "dotenv";
import AuthRoute from "./Routes/AuthRoute.js";
//Routes

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Middleware
// app.use(bodyParser.json({ limit: "30mb", extended: true }));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());

dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`Listening at ${process.env.PORT}`)
    )
  )
  .catch((error) => console.log(error));

//usage of routes
app.use("/auth", AuthRoute);

// import express from "express";
// import bodyParser from "body-parser";
// import mongoose from "mongoose";
// import connectDB from "./config.js";
// import dotenv from "dotenv";

// dotenv.config();

// const app = express();
// app.use(bodyParser.json({ limit: "30mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// connectDB()
//   .then(() => {
//     try {
//       console.log("connected");
//       app.listen(process.env.PORT, () => {
//         console.log(
//           `server is listening on http://localhost:${process.env.PORT}`
//         );
//       });
//     } catch (err) {
//       throw new Error(err);
//     }
//   })
//   .catch((err) => {
//     throw new Error(err);
//   });

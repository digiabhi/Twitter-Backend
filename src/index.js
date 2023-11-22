import express from "express";
import { connect } from "./config/database.js";
import router from "./routes/index.js";
import passport from "passport";
import { passportAuth } from "./middlewares/jwt-middleware.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
passportAuth(passport);
app.use("/api", router);
app.listen(3000, async () => {
  console.log("Server started at 3000");
  // MongoDB connection establishment
  connect();
  console.log("MongoDB connected");

  // Tweet.create({
  //   content: "This is my first tweet",
  //   likes: 25,
  //   noOfRetweets: 5,
  //   comment: "This is my first comment",
  // });

  // Hashtag.create({
  //   text: "travels",
  //   tweets: "648c2a18e6cd38c3b56892d0",
  // });
});

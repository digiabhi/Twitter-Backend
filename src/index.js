import express from "express";
import { connect } from "./config/database.js";
import Hashtag from "./models/hashtag.js";
import Tweet from "./models/tweet.js";
import TweetRepository from "./repository/tweet-repository.js";

const app = express();

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

  const tweetRepo = new TweetRepository();

  let tweets = await tweetRepo.deleteTweet({
    _id: "648c2a18e6cd38c3b56892d0",
  });

  console.log(tweets);
});

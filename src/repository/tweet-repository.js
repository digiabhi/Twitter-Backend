import Tweet from "../models/tweet.js";

class TweetRepository {
  async create(data) {
    try {
      let tweet = await Tweet.create(data);
      return tweet;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getAllTweets() {
    try {
      let tweets = await Tweet.find({});
      return tweets;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getTweet(id) {
    try {
      let tweets = await Tweet.findById(id);
      return tweets;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async deleteTweet(data) {
    try {
      let tweets = await Tweet.deleteOne(data);
      return tweets;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export default TweetRepository;

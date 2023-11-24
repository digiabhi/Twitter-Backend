import { LikeRepository, TweetRepository } from "../repository/index.js";

class LikeService {
  constructor() {
    this.likeRepository = new LikeRepository();
    this.tweetRepository = new TweetRepository();
  }

  async toggleLike(modelId, modelType, userId) {
    console.log(modelId, modelType, userId);
    let likeable;
    if (modelType == "Tweet") {
      likeable = await this.tweetRepository.getTweet(modelId);
    } else if (modelType == "Comment") {
    } else {
      throw new Error("unknown model type");
    }
    const exists = await this.likeRepository.findByUserAndLikeable({
      user: userId,
      onModel: modelType,
      likeable: modelId,
    });
    let isAdded;
    if (exists) {
      likeable.likes.pull(exists.id);
      await likeable.save();
      this.likeRepository.destroy(exists.id);
      isAdded = false;
    } else {
      const newLike = await this.likeRepository.create({
        user: userId,
        onModel: modelType,
        likeable: modelId,
      });
      likeable.likes.push(newLike);
      await likeable.save();
      isAdded = true;
    }
    return isAdded;
  }
}

export default LikeService;

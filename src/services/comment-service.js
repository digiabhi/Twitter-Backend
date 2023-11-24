import { CommentRepository, TweetRepository } from "../repository/index.js";

class CommentService {
  constructor() {
    this.commentRepository = new CommentRepository();
    this.tweetRepository = new TweetRepository();
  }

  async create(modelId, modelType, userId, content) {
    let commentable;
    if (modelType == "Tweet") {
      commentable = await this.tweetRepository.get(modelId);
    } else if (modelType == "Comment") {
      commentable = await this.commentRepository.get(modelId);
    } else {
      throw new Error("unknown model type");
    }
    const comment = await this.commentRepository.create({
      content: content,
      userId: userId,
      onModel: modelType,
      commentable: modelId,
      comments: [],
    });
    commentable.comments.push(comment);
    await commentable.save();

    return comment;
  }
}

export default CommentService;

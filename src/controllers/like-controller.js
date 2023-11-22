import LikeService from "../services/like-service.js";

const likeService = new LikeService();

export const toggleLike = async (req, res) => {
  try {
    const data = req.body;
    const response = await likeService.toggleLike(
      data.modelId,
      data.modelType,
      data.user
    );

    return res.status(201).json({
      success: true,
      message: "Successfully created a like",
      data: response,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: "Error Encountered in toggling a like",
      data: {},
      err: error,
    });
  }
};

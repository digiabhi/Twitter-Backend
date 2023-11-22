import UserService from "../services/user-service.js";

const userService = new UserService();

export const signUp = async (req, res) => {
  try {
    const data = req.body;
    const response = await userService.signUp(data);

    return res.status(201).json({
      success: true,
      message: "Successfully created a user",
      data: response,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: "Error Encountered",
      data: {},
      err: error,
    });
  }
};

export const signIn = async (req, res) => {
  try {
    const data = req.body;
    const response = await userService.signIn(data);

    return res.status(200).json({
      success: true,
      message: "Successfully signed in a user",
      data: response,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: "Error Encountered signin a user",
      data: {},
      err: error,
    });
  }
};

import express from "express";
import { toggleLike } from "../controllers/like-controller.js";
import { createTweet, getTweet } from "../controllers/tweet-controller.js";
import { signUp, signIn } from "../controllers/user-controller.js";
const router = express.Router();

router.post("/tweet", createTweet);

router.get("/tweet/:id", getTweet);

router.post("/signup", signUp);

router.post("/signin", signIn);

router.post("/likes/toggle", toggleLike);

export default router;

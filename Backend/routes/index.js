import express from "express"
import { createTweet } from "../controllers/tweetController.js"
import { toggleLike } from "../controllers/like.controller.js"
import { createComment } from "../controllers/comment.controller.js"
const router=express.Router()
router.post("/tweet",createTweet)
router.post("/toggleLike",toggleLike)
router.post("/comment",createComment)
export default router

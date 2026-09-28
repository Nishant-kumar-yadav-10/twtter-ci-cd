import TweetService from "../services/tweetService.js"

const tweetService=new TweetService
export const createTweet=async function(req,res){
   try {
      
      console.log(TweetService)
    const response=await tweetService.create(req.body)
    res.status(200).json({
      message:"tweet created successfully"
    })
   } catch (error) {
    console.log(error)
   } 
}
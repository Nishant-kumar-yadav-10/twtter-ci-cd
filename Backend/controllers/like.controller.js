import LikeService from "../services/Like.Service.js";
const likeService =new LikeService();

export const toggleLike=async(req,res)=>{

      console.log((req.query.modelId))
    try{
       
        const response=await likeService.toggleLike(req.query.modelId,req.query.modelType,req.body.userId);
       
        return res.status(200).json({
            success:true,
            data:response,
            error:null,
            message:"Request completed successfully"
        })

    }catch(error){
        console.log(error)
        return res.status(500).json({
            sucess:false,
            data:null,
            error:error,
            message:"Internal server error"
        })

    }
}
export default toggleLike;

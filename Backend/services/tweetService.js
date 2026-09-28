import { TweetRepository,HashtagRepository } from "../repository/index.js"

class TweetService {
    constructor(){
 this.tweetRepository=new TweetRepository()
 this.HashtagRepository=new HashtagRepository()
    }

    async create(data){
        const content=data.content
        const tags=content.match(/#[a-zA-Z0-9_]+/g).map((tag)=>tag.substring(1).toLowerCase())
        const tweet =await this.tweetRepository.create(data)
        let alreadyPresentTags=await this.HashtagRepository.findByName(tags)
        let titleofPresenttags=alreadyPresentTags.map(tags=>tags.title)
        let newtags=tags.filter(tag=>!titleofPresenttags.includes(tags))
        newtags=newtags.map(tags=>{
            return {title:tags,tweets:[tweet.id]}
        })
        await this.HashtagRepository.bulkCreate(newtags)
        alreadyPresentTags.forEach(async (tag)=>{
            tag.tweets.push(tweet.id)
             await tag.save()
        })
        return tweet;
    }
   
}
export default TweetService
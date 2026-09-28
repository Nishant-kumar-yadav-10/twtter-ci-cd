import {
    TweetRepository,
    commentRepository
} from "../repository/index.js";

class commentService {
    constructor() {
        this.commentRepository = new commentRepository();
        this.tweetRepository = new TweetRepository();
    }

    async create(modelId, modelType, userId, content) {
        let commentable;

        if (modelType === "Tweet") {
            commentable = await this.tweetRepository.get(modelId);
        } else if (modelType === "Comment") {
            commentable = await this.commentRepository.get(modelId);
        } else {
            throw new Error("Unknown model type");
        }

        if (!commentable) {
            throw new Error("Tweet or comment not found");
        }

        const comment = await this.commentRepository.create({
            content,
            userId,
            onModel: modelType,
            commentable: modelId,
            comments: []
        });

        commentable.comments.push(comment._id);

        await commentable.save();

        return comment;
    }
}

export default commentService;
export interface IComment {
    id: string;
    content: string;
    postId: string;
    likes: number;
    updatedAt: Date;
    parentCommentId?: string;
}

export class Comment implements IComment {
    constructor(
        public id: string,
        public content: string,
        public postId: string,
        public likes: number,
        public updatedAt: Date,
        public parentCommentId?: string
    ) {}
}

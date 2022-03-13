export interface IPost {
    id: string;
    name: string;
    content: string;
    image: string;
    likes: number;
    updatedAt: Date;
}

export class Post implements IPost {
    constructor(
        public id: string,
        public name: string,
        public content: string,
        public image: string,
        public likes: number,
        public updatedAt: Date
    ) {}
}

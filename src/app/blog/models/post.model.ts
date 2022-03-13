export interface IPost {
    id: string;
    name: string;
    content: string;
    image: string | ArrayBuffer | null | undefined;
    likes: number;
    updatedAt: Date;
}

export class Post implements IPost {
    constructor(
        public id: string,
        public name: string,
        public content: string,
        public image: string | ArrayBuffer | null | undefined,
        public likes: number,
        public updatedAt: Date
    ) {}
}

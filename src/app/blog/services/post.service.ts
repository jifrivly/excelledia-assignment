import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { Post } from 'src/app/blog/models';

@Injectable({
    providedIn: 'root',
})
export class PostService {
    postArray: Post[] = [];

    constructor() {}

    getPostById(id: string): Post {
        const post: Post | undefined = this.postArray.find((p) => p.id === id);
        if (post) {
            return post;
        } else {
            throw new Error('No post found.');
        }
    }

    getPosts() {
        return this.postArray;
    }

    createPost(postData: Post): Post {
        this.postArray.push(postData);
        return postData;
    }

    updatePost(id: string, postData: Post) {
        let index: number = this.postArray.findIndex((p) => p.id === id);
        this.postArray[index] = postData;
        return postData;
    }

    deletePost(id: string) {
        let index: number = this.postArray.findIndex((p) => p.id === id);
        this.postArray.splice(index, 1);
    }

    likePost(id: string): Post {
        let index: number = this.postArray.findIndex((p) => p.id === id);
        this.postArray[index].likes++;
        return this.postArray[index];
    }
}

import { Injectable } from '@angular/core';
import { Comment } from 'src/app/blog/models';

@Injectable({
    providedIn: 'root',
})
export class CommentService {
    commentArray: Comment[] = [];

    constructor() {}

    getCommentById(id: string): Comment {
        const comment: Comment | undefined = this.commentArray.find(
            (c) => c.id === id
        );
        if (comment) {
            return comment;
        } else {
            throw new Error('No comment found.');
        }
    }

    getComments(postId?: string, parentCommentId?: string): Comment[] {
        if (postId) {
            if (parentCommentId) {
                // first 2nd to any level comments of a post
                console.log('first 2nd to any level comments of a post');
                return this.commentArray.filter(c => c.postId === postId && c.parentCommentId === parentCommentId);
            } else {
                // first level comments of a post
                console.log('first level comments of a post');
                return this.commentArray.filter(c => c.postId === postId && !c.parentCommentId);
            }
        } else {
            // cmments without filtering
            return this.commentArray;
        }
    }

    createComment(commentData: Comment): Comment {
        this.commentArray.push(commentData);
        return commentData;
    }

    updateComment(id: string, commentData: Comment) {
        let index: number = this.commentArray.findIndex((p) => p.id === id);
        this.commentArray[index] = commentData;
        return commentData;
    }

    deleteComment(id: string) {
        let index: number = this.commentArray.findIndex((p) => p.id === id);
        this.commentArray.splice(index, 1);
    }

    likeComment(id: string): Comment {
        let index: number = this.commentArray.findIndex((p) => p.id === id);
        this.commentArray[index].likes++;
        return this.commentArray[index];
    }
}

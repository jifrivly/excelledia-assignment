import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

import { Comment } from 'src/app/blog/models';
import { CommentService } from '../services';

@Component({
    selector: 'app-comment-add-edit',
    templateUrl: './comment-add-edit.component.html',
    styleUrls: ['./comment-add-edit.component.scss'],
})
export class CommentAddEditComponent implements OnInit {
    @Input() openMode: 'create' | 'update' = 'create';
    @Input() postId: string = '';
    @Input() parentCommentId: string = '';
    @Input() comment: string = '';
    @Output() commentCUEvent = new EventEmitter<Comment>();

    constructor(private commentService: CommentService) {}

    ngOnInit(): void {}

    addComment(commentText: string) {
        const comment: Comment = {
            id: uuidv4(),
            postId: this.postId,
            parentCommentId: this.parentCommentId,
            content: commentText,
            likes: 0,
            updatedAt: new Date(),
        };
        this.comment = '';
        console.log('Adding comment form post ', this.postId, comment);
        this.commentService.createComment(comment);
        this.commentCUEvent.emit(comment);
    }
}

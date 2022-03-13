import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Comment } from 'src/app/blog/models';
import { CommentService } from 'src/app/blog/services';

@Component({
    selector: 'app-comment-view',
    templateUrl: './comment-view.component.html',
    styleUrls: ['./comment-view.component.scss'],
})
export class CommentViewComponent implements OnInit {
    @Input() comment!: Comment;
    @Output() deleteEvent: EventEmitter<string> = new EventEmitter<string>();

    constructor(private commentService: CommentService) {}

    ngOnInit(): void {}

    likeComment(commentId: string) {
        this.commentService.likeComment(commentId);
    }

    deleteComment(commentId: string) {
        this.commentService.deleteComment(commentId);
        this.deleteEvent.emit(commentId);
    }
}

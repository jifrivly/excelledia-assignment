import { Component, Input, OnInit } from '@angular/core';
import { CommentService } from 'src/app/blog/services';
import { Comment } from 'src/app/blog/models';

@Component({
    selector: 'app-comment-list',
    templateUrl: './comment-list.component.html',
    styleUrls: ['./comment-list.component.scss'],
})
export class CommentListComponent implements OnInit {
    comments: Comment[] = [];
    @Input() postId: string = '';
    @Input() parentId: string = '';

    constructor(private commentService: CommentService) {}

    ngOnInit(): void {}

    commentUpdated(comment?: Comment) {
        this.comments = this.commentService.getComments(
            this.postId,
            this.parentId
        );
    }
}

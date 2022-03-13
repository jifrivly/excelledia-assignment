import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models';
import { PostService } from '../services';

@Component({
    selector: 'app-post-view',
    templateUrl: './post-view.component.html',
    styleUrls: ['./post-view.component.scss'],
})
export class PostViewComponent implements OnInit {
    @Input() post!: Post;

    constructor(private postService: PostService) {}

    ngOnInit(): void {}

    likePost(id: string) {
        this.postService.likePost(id);
    }

    deletePost(id: string) {
        this.postService.deletePost(id);
    }
}

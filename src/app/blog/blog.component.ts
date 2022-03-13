import { Component, OnInit } from '@angular/core';
import { PostService } from './services';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
    constructor(public postService: PostService) {}

    ngOnInit(): void {}
}

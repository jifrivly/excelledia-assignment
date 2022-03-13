import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { PostAddEditComponent } from './post-add-edit/post-add-edit.component';
import { CommentService, PostService } from 'src/app/blog/services';
import { PostViewComponent } from './post-view/post-view.component';
import { CommentAddEditComponent } from './comment-add-edit/comment-add-edit.component';
import { CommentViewComponent } from './comment-view/comment-view.component';
import { CommentListComponent } from './comment-list/comment-list.component';

@NgModule({
    declarations: [BlogComponent, PostAddEditComponent, PostViewComponent, CommentAddEditComponent, CommentViewComponent, CommentListComponent],
    imports: [
        CommonModule,
        BlogRoutingModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [PostService, CommentService],
})
export class BlogModule {}

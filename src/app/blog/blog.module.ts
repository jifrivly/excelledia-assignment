import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { PostAddEditComponent } from './post-add-edit/post-add-edit.component';
import { PostService } from './services';
import { PostViewComponent } from './post-view/post-view.component';

@NgModule({
    declarations: [BlogComponent, PostAddEditComponent, PostViewComponent],
    imports: [
        CommonModule,
        BlogRoutingModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [PostService],
})
export class BlogModule {}

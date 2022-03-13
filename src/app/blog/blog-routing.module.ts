import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostAddEditComponent } from './post-add-edit/post-add-edit.component';
import { PostViewComponent } from './post-view/post-view.component';
import { BlogComponent } from './blog.component';

const routes: Routes = [
    {
        path: '',
        component: BlogComponent,
    },
    {
        path: 'posts/:id/view', // TODO: not fully implemented
        component: PostViewComponent
    },
    {
        path: 'posts/:id/edit', // TODO: not fully implemented
        component: PostAddEditComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BlogRoutingModule {}

import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';

import { Post } from 'src/app/blog/models';
import { PostService } from 'src/app/blog/services';

@Component({
    selector: 'app-post-add-edit',
    templateUrl: './post-add-edit.component.html',
    styleUrls: ['./post-add-edit.component.scss'],
})
export class PostAddEditComponent implements OnInit {
    heading: string = 'Create new post';
    openMode: 'create' | 'update' = 'create';
    postForm: FormGroup;

    get name(): AbstractControl | null {
        return this.postForm.get('name');
    }

    get image(): AbstractControl | null {
        return this.postForm.get('image');
    }

    get description(): AbstractControl | null {
        return this.postForm.get('description');
    }

    constructor(formBuilder: FormBuilder, private postService: PostService) {
        this.postForm = formBuilder.group({
            name: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
            image: [null, [Validators.required]],
            description: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(250)]],
        });
    }

    ngOnInit(): void {}

    onFileChange(event: Event) {
        // const target = event.target as HTMLInputElement;
        // const file = (target.files as FileList)[0];
        const file: File = ((event.target as HTMLInputElement).files as FileList)[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = (event) => {
            this.image?.setValue(event?.target?.result as string);
        };
    }

    createPost(formData: FormGroup) {
        const post: Post = {
            id: uuidv4(),
            name: formData.value.name,
            image: formData.value.image,
            content: formData.value.description,
            likes: 0,
            updatedAt: new Date(),
        };
        this.postService.createPost(post);
    }
}

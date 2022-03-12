# Blogging App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

# ExcellediaAssignment

## Machine Test – Blog Task

#### Question: Create a blog application with post adding, image upload, like and comment options.

- No need to do any api integrations, all the data entered can be saved locally and displayed
- Initially there will be a text area and file upload option and a button.
- Once some text is added or file is uploaded show it in the bottom one by one
- For each post we can give like, and the like count should increment accordingly
- We should be able to delete the posts and comments as well
- For each post we can give comments.
- And for the comments also we need like and comment option.
- It can come up to many levels
- The whole data should be center aligned

### post
- id
- name
- content
- image
- likes - intiger field because of no user information

### comment
- id
- content
- postId
- likes
- parentCommentId

import { Component } from '@angular/core';
import {BlogService}  from '../service/blog.service'

@Component({
    selector: 'blog',
    templateUrl: '../app/component/view/blog.html',
    providers: [BlogService]
})

export class BlogComponent {
    constructor (private blogService: BlogService){
    }

    title = 'Blog';
    records = this.blogService.getRecord();
}

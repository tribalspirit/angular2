import { Injectable } from '@angular/core';
import BlogRecord from '../model/blog'

const blogRecords: BlogRecord[] = [
    {
        id: 3,
        timeStamp: 'Sat 3, June',
        author: 'John',
        tags: ['humor', 'travel'],
        text: 'Lorem ipsum dolor',
        isPublished: true
    },
    {
        id: 4,
        timeStamp: 'Fri 8, June',
        author: 'Jane',
        tags: ['thoughts', 'personal'],
        text: 'Lorem ipsum dolor',
        isPublished: true
    }
]
@Injectable()
export class BlogService {
    getRecord(){
        return blogRecords;
    }
}
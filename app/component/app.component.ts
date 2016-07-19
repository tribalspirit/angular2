import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {BlogComponent} from './blog.component';
import {ContactsComponent} from './contacts.component';

@Component({
    selector: 'my-app',
    templateUrl: '../app/component/view/main.html',
    directives: [ROUTER_DIRECTIVES],
    precompile: [BlogComponent, ContactsComponent]
})

export class AppComponent {
}

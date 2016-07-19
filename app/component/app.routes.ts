import { provideRouter, RouterConfig } from '@angular/router';
import {BlogComponent} from './blog.component';
import {ContactsComponent} from './contacts.component';

const routes: RouterConfig = [
    { path: '', component: BlogComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'contacts', component: ContactsComponent }
];

export const appRouterProviders = [
    provideRouter(routes)
];
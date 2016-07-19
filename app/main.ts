import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './component/app.component';
import { appRouterProviders } from './component/app.routes';
bootstrap(AppComponent, [
    appRouterProviders
]);

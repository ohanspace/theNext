import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

@Injectable()
export class ConfigService {
    getRouteConfig(): Observable<any> {
        return of({path: 'pageModule', loadChildren: 'app/page/page.module#PageModule'});
    }
}

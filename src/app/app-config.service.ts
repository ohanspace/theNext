import {Injectable} from '@angular/core';
import { Observable , of} from 'rxjs';

@Injectable()
export class AppConfigService {
    getRouteConfig(): Observable<any> {
        return of({path: 'pageModule', loadChildren: 'app/page/page.module#PageModule'});
    }
}

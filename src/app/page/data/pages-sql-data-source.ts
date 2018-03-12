import {PagesDataSource} from './pages-data-source';
import {Observable} from 'rxjs/Observable';
import {Page} from '../models/Page';
import {Injectable} from '@angular/core';

@Injectable()
export class PagesSqlDataSource extends PagesDataSource {
  getPages(): Observable<Page[]> {
    return undefined;
  }

}

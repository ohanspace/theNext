import {Observable} from 'rxjs/Observable';
import {Page} from '../models/Page';

export abstract class PagesDataSource {
  abstract getPages(): Observable<Page[]>;
}

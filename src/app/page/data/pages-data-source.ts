import {Observable} from 'rxjs';
import {Page} from '../models/Page';

export abstract class PagesDataSource {
  abstract getPages(): Observable<Page[]>;
}

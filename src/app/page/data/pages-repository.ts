import {PagesDataSource} from './pages-data-source';
import {Page} from '../models/Page';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';


@Injectable()
export class PagesRepository extends PagesDataSource {
  constructor(private pagesDataSource: PagesDataSource) {
    super();
  }

  getPages(): Observable<Page[]> {
    return this.pagesDataSource.getPages();
  }

}

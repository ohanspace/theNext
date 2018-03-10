import { Injectable } from '@angular/core';
import {Page} from '../models/Page';
import {PAGES} from '../../mocks/pages';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {LoggerService} from '../../core/services/logger.service';

@Injectable()
export class PageService {

  constructor(private loggerService: LoggerService) { }

  getPages(): Observable<Page[]> {
    this.loggerService.add('PageService: fetched pages');
    return of(PAGES);
  }

  getFeaturedPages(): Observable<Page[]> {
      this.loggerService.add('PageService: fetched featured pages');
      return of(PAGES.slice(1, 3));
  }

  getPage(id: number): Observable<Page> {
      this.loggerService.add(`PageService: fetched page of id: ${id}`);
      return of(PAGES.find(page => page.id === id));
  }

}

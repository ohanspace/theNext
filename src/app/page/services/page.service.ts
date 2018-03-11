import { Injectable } from '@angular/core';
import {Page} from '../models/Page';
import {PAGES} from '../../mocks/pages';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {LoggerService} from '../../core/services/logger.service';
import {AngularFirestore} from 'angularfire2/firestore';

@Injectable()
export class PageService {

  constructor(private loggerService: LoggerService, private firestore: AngularFirestore) { }

  getPages(): Observable<Page[]> {
    this.loggerService.add('PageService: fetched pages');
    // return of(PAGES);
    return (<Observable<Page[]>>this.firestore.collection('pages').valueChanges());
  }

  getFeaturedPages(): Observable<Page[]> {
      this.loggerService.add('PageService: fetched featured pages');
      // return of(PAGES.slice(1, 3));
      return (<Observable<Page[]>>this.firestore.collection('pages').valueChanges());
  }

  getPage(id: number): Observable<Page> {
      this.loggerService.add(`PageService: fetched page of id: ${id}`);
      return of(PAGES.find(page => page.id === id));
  }

}
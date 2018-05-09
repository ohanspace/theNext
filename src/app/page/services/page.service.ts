import { Injectable } from '@angular/core';
import { Page } from '../models/Page';
import { PAGES } from '../../mocks/pages';
import { Observable ,  of } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { PagesRepository } from '../data/pages-repository';

@Injectable()
export class PageService {
  constructor(
    private firestore: AngularFirestore,
    private pagesRepository: PagesRepository
  ) {}

  getPages(): Observable<Page[]> {
    return this.pagesRepository.getPages();
  }

  getFeaturedPages(): Observable<Page[]> {
    // return of(PAGES.slice(1, 3));
    return <Observable<Page[]>>this.firestore
      .collection('pages')
      .valueChanges();
  }

  getPage(id: number): Observable<Page> {
    return of(PAGES.find(page => page.id === id));
  }
}

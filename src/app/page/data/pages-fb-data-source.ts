import {PagesDataSource} from './pages-data-source';
import {Observable} from 'rxjs';
import {Page} from '../models/Page';
import {Injectable} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';

@Injectable()
export class PagesFbDataSource extends PagesDataSource {
  constructor(private firestore: AngularFirestore) {
    super();
  }


  getPages(): Observable<Page[]> {
    return (<Observable<Page[]>>this.firestore.collection('pages').valueChanges());
  }

}

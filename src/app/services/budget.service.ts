import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Entry } from '../models';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  constructor(
    private afs: AngularFirestore,
    private authService: AuthService
  ) {}

  getEntriesForUser(): Observable<Entry[]> {
    return this.authService.user$.pipe(
      switchMap((user) => {
        return this.afs
          .collection<Entry>('entries', (ref) =>
            ref.where('userUid', '==', user.uid)
          )
          .valueChanges()
          .pipe(map((entry) => entry));
      })
    );
  }

  save(entry: Entry): Observable<string> {
    return this.authService.user$.pipe(
      switchMap((user) => {
        entry.userUid = user.uid;
        return from(
          this.afs
            .collection('entries')
            .add(entry)
            .catch((err) => {
              console.error(err);
              return null;
            })
            .then((docRef) => {
              return docRef.id;
            })
        );
      })
    );
  }

  update(entry: Entry): Observable<string> {
    return from(
      this.afs
        .collection('entries')
        .doc(entry.id)
        .set(entry)
        .catch((err) => {
          console.error(err);
          entry.id = null;
        })
        .then(() => {
          return entry.id;
        })
    );
  }
}

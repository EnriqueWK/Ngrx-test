import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ShowCaseService {
  constructor() {}

  getApi(): Observable<any> {
     const data = [
      { name: 'Name 1', price: 3, image: 'https://www.google.es' },
      { name: 'Name 2', price: 4, image: 'https://www.google.es' },
      { name: 'Name 3', price: 34, image: 'https://www.google.es' },
      { name: 'Name 4', price: 300, image: 'https://www.google.es' },
      { name: 'Name 5', price: 1, image: 'https://www.google.es' },
      { name: 'Name 6', price: 6, image: 'https://www.google.es' },
      { name: 'Name 7', price: 9, image: 'https://www.google.es' },
      { name: 'Name 8', price: 5, image: 'https://www.google.es' },
  ];

  return of(data).pipe(delay(1500));
  }
}

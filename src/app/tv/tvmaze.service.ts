import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class TvmazeService {

  // Wstrzyknięcie usługi do konstruktora
  // tworzymy obiekt klasy tej usługi
  constructor(private http: HttpClient) { }

  // Dostajemy odpowiedź w postaci strumienia
  // i przekształcamy go na tablicę typu Show[]
  searchShows(query: string): Observable<Show[]> {
    const url = 'https://api.tvmaze.com/search/shows?q=' + query;
    return this.http.get<ShowResponse[]>(url)
      .map((showsResponses) => showsResponses.map(response => response.show));
  }

}

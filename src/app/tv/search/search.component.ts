import {Component, OnInit} from '@angular/core';
import {TvmazeService} from '../tvmaze.service';
import {Observable} from 'rxjs/Observable';
import {timer} from 'rxjs/observable/timer';

@Component({
  selector: 'st-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  query = 'flash';
  // shows: Show[] = [];
  shows$: Observable<Show[]>;
  timer$: Observable<any>;

  // Wstrzyknięcie usługi do konstruktora
  // tworzymy obiekt klasy tej usługi
  constructor(private tv: TvmazeService) {
    this.timer$ = timer(0, 1000);
  }

  ngOnInit() {
  }

  search(query: string) {
    this.shows$ = this.tv.searchShows(query);
    //this.tv.sarchShows(query)
      // .subscribe(shows => this.shows = shows);
  }
}

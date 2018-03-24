import {Component, OnInit} from '@angular/core';
import {TvmazeService} from '../tvmaze.service';

@Component({
  selector: 'st-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  query = 'flash';
  shows: Show[] = [];

  // Wstrzyknięcie usługi do konstruktora
  // tworzymy obiekt klasy tej usługi
  constructor(private tv: TvmazeService) {
  }

  ngOnInit() {
  }

  search(query: string) {
    this.tv.searchShows(query)
      .subscribe(shows => this.shows = shows);
  }
}

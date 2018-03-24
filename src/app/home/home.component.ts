import {Component, EventEmitter, Input, OnInit} from '@angular/core';

@Component({
  selector: 'st-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  @Input() owner = 'pawel';
  @Input() timePassed = new EventEmitter<number>();

  constructor() {
    setInterval(() => {
        this.timePassed.emit(+ new Date()); // equal to: new Date().valueOf()
      },
      2500);
  }

  ngOnInit() {
  }

}

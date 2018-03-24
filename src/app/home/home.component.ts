import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';

@Component({
  selector: 'st-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  @Input() owner = 'pawel';
  @Output() timePassed = new EventEmitter<number>();

  constructor() {
    setInterval(() => {
        this.timePassed.emit(+ new Date()); // equal to: new Date().valueOf()
      },
      1000);
  }

  ngOnInit() {
  }

}

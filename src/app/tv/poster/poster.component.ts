import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'st-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss']
})
export class PosterComponent implements OnInit {
  @Input() show: Show;

  constructor() {
  }

  ngOnInit() {
  }

}

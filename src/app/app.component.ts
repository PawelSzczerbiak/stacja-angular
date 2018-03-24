import {Component} from '@angular/core';

@Component({
  selector: 'st-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Hello';

  handleClick(event: MouseEvent) {
    this.title = this.title + event.clientX;
  }

  handleTimePassed(value) {
    this.title = value;
  }

}

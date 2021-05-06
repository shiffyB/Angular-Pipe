import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  birthday=new Date();
  mark=33.5
  cunc=43
  title = 'pipeHW';
}



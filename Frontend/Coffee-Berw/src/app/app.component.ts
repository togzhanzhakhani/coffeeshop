import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  static isLogged:boolean;
  title = 'Coffee-Berw';

  ngOnInit(): void {
    AppComponent.isLogged = true;
  }
}

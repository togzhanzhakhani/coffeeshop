import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  static isLogged: boolean;
  static username: string
  static usernameID: number
  ngOnInit() {
    const userId = localStorage.getItem('userId');
    if(userId){
      AppComponent.usernameID = parseInt(userId, 10)
    }
    const token = localStorage.getItem('token');
    if(token){
      AppComponent.isLogged = true;
    }
    else{
      AppComponent.isLogged = false;
    }
    console.log(AppComponent.usernameID)
    console.log(AppComponent.isLogged)
  }
  title = 'Coffee-Berw';


}

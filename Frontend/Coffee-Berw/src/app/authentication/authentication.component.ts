import { Component } from '@angular/core';
import {LoginService} from "../login.service";
import {Router} from "@angular/router";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent {
  username!:string;
  password!:string;

  somethingWentWrong:string = "";
  constructor(private loginService: LoginService,
              private router: Router) {
  }
  login(){
    if(!this.username || !this.password){
      this.somethingWentWrong = "Please fill all fields";
      return
    }
    this.loginService.getInfoAboutUser(this.username).subscribe(
      data=>{
      AppComponent.usernameID = data.id;
      },
      error => {
        console.log(error);
      })
    this.loginService.login(this.username, this.password).subscribe(
        data=>{
          console.log(data);

          localStorage.setItem('token', data.access);
          localStorage.setItem('userId', AppComponent.usernameID.toString())

          AppComponent.isLogged = true;
          AppComponent.username = this.username
          this.somethingWentWrong = ""
          this.router.navigate([''])
        },
        error => {
          this.somethingWentWrong = error;
        })
  }
}

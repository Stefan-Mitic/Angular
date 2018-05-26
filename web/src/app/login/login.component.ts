import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
c
  constructor() { }

  ngOnInit() {
  }

  loginUser(event){
    event.preventDefault(); // prevents page from reloading
    console.log(event);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Username="";
  Password="";

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  calllogin(){
    console.log(this.Username,this.Password);
    console.log("Login successfully")
    this.route.navigate(["quiz"])
  }
  navigateToSignUp(){
    this.route.navigate(['signup'])
  }
  

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  myName="";
  Number="";
  Email="";
  Age="";
  Username="";
  Password="";
  Confirmpassword="";

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  Submit(){
    console.log("Signup successfully",
    this.myName,
    this.Number,
    this.Email,
    this.Age,
    this.Email,
    this.Username,
    this.Password,
    this.Confirmpassword),
    this.route.navigate(["quiz"])
  }
  navigateTologin(){
    this.route.navigate([""])
  }

}

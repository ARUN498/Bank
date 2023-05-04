import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  data="Your Perfect Banking Partner"
  uname:any
  psw:any

  placeHolderData="Enter user name"
  constructor(private ds:DataService){}

  ngOnInit(): void {
    
  }
  login(){
    console.log(this.uname,this.psw);
    // alert(this.ds.sData)
    alert(this.ds.checkData())
  }
}

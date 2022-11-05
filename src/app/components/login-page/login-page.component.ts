import { Component, OnInit } from '@angular/core';
import { UserInfoService } from 'src/app/user-info.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {


  constructor(private userService:UserInfoService) { }

  ngOnInit(): void {


  }

  login(userName: string, password: string): void{

    this.userService.checkLoginDetails(userName, password);



  }

}

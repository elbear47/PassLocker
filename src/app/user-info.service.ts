import { Unary } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { User } from './classes/user';

@Injectable({
  providedIn: 'root',
})
export class UserInfoService {
  userDb: User[] = [
    {
      username: 'elbear47',
      password: 'Pakito123',
      email: 'elberfunez@gmail.com',
      hint: 'Bird 123',
    },
    {
      username: 'Zandomando',
      password: 'La_Herradura_12',
      email: 'eddysoccer123@yahoo.com',
      hint: 'Bird 123',
    },
  ];

  constructor() {}

  getAllUsers(): User[] {
    return this.userDb;
  }

  checkLoginDetails(uName: string, pass: string): boolean{
    let isCorrectLogin: boolean = false;
    let relatedUser: User  = (this.userDb.filter(x => x.username === uName))[0];

    if (relatedUser.password === pass) {
      isCorrectLogin = true;
      console.log("login worked");

    } else {
      isCorrectLogin = false;
      console.log("wrong password, try again.");

    }
    return isCorrectLogin;


  }
}

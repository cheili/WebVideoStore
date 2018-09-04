import {Component, OnInit} from '@angular/core';
import {first} from 'rxjs/operators';
import {User} from '../../models/user';
import {UserService} from '../../services/user/user.service';



@Component({templateUrl: 'home.component.html'})
export class HomeComponent implements OnInit {

  users: User[] = [];


  constructor() {}

  ngOnInit() {

  }
//  constructor(private userService: UserService) {}
//
//  ngOnInit() {
//
//    alert(this.userService);
//
//    this.userService.getAll().pipe(first()).subscribe(users => {
//      this.users = users;
//    });
//  }
}
import { UserModel } from './../model/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

   private user: UserModel;

  constructor() {
    this.user = new UserModel();
  }

  ngOnInit() {
  }

}

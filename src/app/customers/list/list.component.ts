import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/providers/users.service';

interface User {
  id: string;
  name: string;
  username: string;
  email: string;
}


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  userList = this.users.getUsers();

  constructor(
    private users: UsersService
  ) { }

  ngOnInit(): void {
  }


}

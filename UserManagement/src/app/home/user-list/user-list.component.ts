import { Component, OnInit } from '@angular/core';
import { RootService } from '../../root.service';
import { User } from '../../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  users !: User[];

  constructor(private service: RootService) {}

  ngOnInit(): void {
    this.service.getUser().subscribe((users:User[]) => {
      this.users = users;
    });
  }
}

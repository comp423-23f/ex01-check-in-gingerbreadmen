import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit{
  users: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    // Retrieve the list of users from the user service
    this.users = this.userService.getUsers();
  }

}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CheckinService } from '../check-in.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit{
  users: any[] = [];
  checkedin: any[] = [];

  constructor(private userService: UserService, private checkinService: CheckinService) {}

  ngOnInit() {
    // Retrieve the list of users from the user service
    this.users = this.userService.getUsers();
    this.checkedin = this.checkinService.getCheckinRecords();
  }

}

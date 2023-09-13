import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CheckinService {
  private checkinRecords: any[] = [];

  constructor(private userService: UserService) {}

  checkIn(userId: String) {
    const user = this.userService.getUserFromID(userId);
  

    if (user) {
      const checkInRecord = {
        userId: user.pid,
        name: `${user.firstName} ${user.lastName}`,
        dateTime: new Date()
      };
      this.checkinRecords.push(checkInRecord);
      return;
    }
    else{
      return "A student matching the PID could not be found";
    }
    
  }

  getCheckinRecords() {
    return this.checkinRecords;
  }

  
}


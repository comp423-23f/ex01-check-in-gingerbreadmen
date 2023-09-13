import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { CheckinService } from '../check-in.service';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckinComponent {

  checkT = {
    pidCheck: '',
    badPID: false,
    message: ''
  };

  

  constructor(private userService: UserService, private checkinService: CheckinService) {}

  onSubmit() {
  
    if(this.checkT.pidCheck.length != 9){
      this.checkT.badPID = true;
      this.checkT.message = '';
    }
    else{
      this.checkT.badPID = false;
      this.checkT.message = this.userService.getUserFromPid(this.checkT.pidCheck);
      if(this.checkT.message !== "A student matching the PID could not be found"){
        this.checkT.pidCheck = '';
      }
      this.checkinService.checkIn(this.checkT.pidCheck);
      
    }

    
    

  }

}

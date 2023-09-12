import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckinComponent {


  pidCheck = ''

  badPID = false

  message = '';
  

  constructor(private userService: UserService) {}

  onSubmit() {
  
    if(this.pidCheck.length != 9){
      this.badPID = true;
      this.message = '';
    }
    else{
      this.badPID = false;
      this.message = this.userService.getUserFromPid(this.pidCheck);
      if(this.message !== "A student matching the PID could not be found"){
        this.pidCheck = '';
      }
      
    }

    
    

  }

}

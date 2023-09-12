import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  firstNameMessage = ''

  
  user = {
    firstName: '',
    lastName: '',
    pid: ''
  };

  userT = {
    firstName: '',
    lastName: '',
    pid: ''
  };

 

  showThankYouMessage = false;

  constructor(private userService: UserService) {}

  onSubmit() {

    this.user = {
      firstName: this.userT.firstName,
      lastName: this.userT.lastName,
      pid: this.userT.pid
    };

    this.userService.addUser(this.user)
    console.log('User Registration Data:', this.firstNameMessage);
    console.log('User Array:', this.userService.getUsers);
    
    this.firstNameMessage = this.user.firstName;
    
    this.showThankYouMessage = true;

    this.userT = {
      firstName: '',
      lastName: '',
      pid: ''
    };

  }

}

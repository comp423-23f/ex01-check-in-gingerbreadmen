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

  showThankYouMessage = false;

  constructor(private userService: UserService) {}

  onSubmit() {
    this.userService.addUser(this.user)
    console.log('User Registration Data:', this.firstNameMessage);
    console.log('User Array:', this.userService.getUsers);
    
    this.firstNameMessage = this.user.firstName;
    this.user.firstName = '';
    this.user.lastName = '';
    this.user.pid = '';
    this.showThankYouMessage = true;

  }

}

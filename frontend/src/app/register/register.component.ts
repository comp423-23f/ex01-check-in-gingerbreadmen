import { Component } from '@angular/core';

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

  onSubmit() {
    console.log('User Registration Data:', this.firstNameMessage);
    
    this.firstNameMessage = this.user.firstName;
    this.user.firstName = '';
    this.user.lastName = '';
    this.user.pid = '';
    this.showThankYouMessage = true;

  }

}

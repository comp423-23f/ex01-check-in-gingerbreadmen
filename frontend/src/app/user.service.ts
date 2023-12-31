import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: any[] = [];

  addUser(user: any){
    this.users.push(user);
  }

  getUsers(){
    return this.users.sort((a, b) => a.firstName.localeCompare(b.firstName));
  }
  constructor() { }

  getUserFromPid(enteredPid: String){

    for(let i in this.users){
      if(this.users[i].pid === enteredPid){
        return "thank you " + this.users[i].firstName + " " + this.users[i].lastName + "!";
        
      }
    }
    return "A student matching the PID could not be found";
  }
    
  getUserFromID(enteredPid: String){
    for(let i in this.users){
      if(this.users[i].pid === enteredPid){
        return this.users[i];
      }
    }
  }

}

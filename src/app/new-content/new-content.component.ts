import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-new-content',
  templateUrl: './new-content.component.html',
  styleUrls: ['./new-content.component.css']
})
export class NewContentComponent implements OnInit {
  users: string[] = ['ryan', 'joe', 'cameron']
  activated: boolean = true;
  name: string = 'John Carter';
  age: number = 28;
  address:  {
    street: string;
    city: string;
  };
  hobbies: string[];
  posts = [];

  sayHello() {
    alert('Hello user');
  }

  addUser(newUser) {
    if (newUser.value) {
      this.users.push(newUser.value);
      newUser.value = '';
      newUser.focus();
    }
    return false;
  }

  deleteUser(user) {
    for(let i = 0; i < this.users.length; i++) {
      if (user == this.users[i]) {
        this.users.splice(i, 1);
      }
    }
  }

  constructor(private dataService: DataService) {
    this.address = {
      street: 'Backer Street',
      city: 'London'
    }
    this.hobbies = ['swimming', 'read', 'write'];
    this.dataService.getData().subscribe(data => {
      this.posts = data;
    });
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-content',
  templateUrl: './new-content.component.html',
  styleUrls: ['./new-content.component.css']
})
export class NewContentComponent implements OnInit {
  users = ['ryan', 'joe', 'cameron']
  activated: boolean = true;
  name: string = 'Ryan Ray'
  age: number;
  address:  {
    street: string;
    city: string;
  };
  hobbies: string[];

  constructor() {
    this.age = 28;
    this.address = {
      street: 'Backer Street',
      city: 'London'
    }
    this.hobbies = ['swimming', 'read', 'write'];
  }

  ngOnInit() {
  }

}

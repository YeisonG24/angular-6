import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-content',
  templateUrl: './new-content.component.html',
  styleUrls: ['./new-content.component.css']
})
export class NewContentComponent implements OnInit {
  users = ['ryan', 'joe', 'cameron']
  activated = true;

  constructor() { }

  ngOnInit() {
  }

}

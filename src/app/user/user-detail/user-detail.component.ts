import { Component, OnInit } from '@angular/core';
import { UserComponent } from '../user/user.component'
@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  component = UserComponent;  
  constructor() { }

  ngOnInit() {
  }

}

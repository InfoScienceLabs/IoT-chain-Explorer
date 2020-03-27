import { Component, Input } from '@angular/core';

@Component({
  selector: 'user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss',
    '../../../styles/shared/_explorer-list-item.scss']
})
export class UserListItemComponent {

  constructor() { }

  ngOnInit() {
  }

  @Input() data: object;

}

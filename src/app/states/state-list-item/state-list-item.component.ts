import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-state-list-item',
  templateUrl: './state-list-item.component.html',
  styleUrls: ['./state-list-item.component.scss',
  '../../../styles/shared/_explorer-list-item.scss']
})
export class StateListItemComponent implements OnInit {
  @Input() data: object;
  constructor() { }

  ngOnInit() {
  }

}

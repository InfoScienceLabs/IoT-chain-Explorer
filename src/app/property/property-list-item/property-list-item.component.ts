import { Component, Input, OnInit } from '@angular/core';

/**
 * A smaller view for showing a property as a list item.
 */
@Component({
  selector: 'property-list-item',
  templateUrl: './property-list-item.component.html',
  styleUrls: ['./property-list-item.component.scss',
    '../../../styles/shared/_explorer-list-item.scss'
  ]
})
export class PropertyListItemComponent {

  @Input() data: object;
  // constructor() {}
  // ngOnInit() {}
}

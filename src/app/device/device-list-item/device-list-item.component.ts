import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-device-list-item',
  templateUrl: './device-list-item.component.html',
  styleUrls: ['./device-list-item.component.scss',
    '../../../styles/shared/_explorer-list-item.scss']
})
export class DeviceListItemComponent {

  @Input() data: object;


}

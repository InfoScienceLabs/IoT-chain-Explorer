import { Component, Input } from '@angular/core';

@Component({
  selector: 'contract-list-item',
  templateUrl: './contract-list-item.component.html',
  styleUrls: ['./contract-list-item.component.scss', '../../../styles/shared/_explorer-list-item.scss'
]
})
export class ContractListItemComponent {

  @Input() data: object;

}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'certificate-list-item',
  templateUrl: './certificate-list-item.component.html',
  styleUrls: ['./certificate-list-item.component.scss',
    '../../../styles/shared/_explorer-list-item.scss'
]
})
export class CertificateListItemComponent {

  @Input() data: object;

}

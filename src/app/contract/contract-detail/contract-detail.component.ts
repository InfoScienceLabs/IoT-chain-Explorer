import { Component, OnInit } from '@angular/core';
import { ContractComponent } from '../contract/contract.component';

@Component({
  selector: 'contract-detail',
  templateUrl: './contract-detail.component.html',
  styleUrls: ['./contract-detail.component.scss']
})
export class ContractDetailComponent {

  component = ContractComponent;

}

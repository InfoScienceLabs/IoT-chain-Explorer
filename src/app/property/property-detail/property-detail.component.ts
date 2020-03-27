import { Component, OnInit } from '@angular/core';
import { PropertyComponent } from '../property/property.component';


@Component({
  selector: 'property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss']
})
export class PropertyDetailComponent {

  constructor() { }

  ngOnInit() {
  }
  // component to load for transaction information
  component = PropertyComponent;

}

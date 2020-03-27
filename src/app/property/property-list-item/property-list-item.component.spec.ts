import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyListItemComponent } from './property-list-item.component';

describe('PropertyListItemComponent', () => {
  let component: PropertyListItemComponent;
  let fixture: ComponentFixture<PropertyListItemComponent>;

  const transactionData: object = require('../../../assets/mock-data/transaction.json');
  const transactionID = 'b92e956f5eba91892bf4c1c1d5ed61a52f7f8b19c1bbbf3eefd9322377efd69b0966fcbcb102f21f8aab8cc4980b1fbb89d3ea8e032f3862a0a21a49f7c34966';


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyListItemComponent);
    component = fixture.componentInstance;
    component.data = transactionData['data'];
    fixture.detectChanges();
  });

  it('creates an instance', () => {
    expect(component).toBeTruthy();
  });

  it('loads property data', () => {
    expect(component.data['propId']).toEqual(transactionID);
  });
});

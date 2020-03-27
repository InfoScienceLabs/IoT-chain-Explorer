import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateByIdComponent } from './state-by-id.component';

describe('StateByIdComponent', () => {
  let component: StateByIdComponent;
  let fixture: ComponentFixture<StateByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

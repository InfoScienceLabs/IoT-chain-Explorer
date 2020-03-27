import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateListItemComponent } from './certificate-list-item.component';

describe('CertificateListItemComponent', () => {
  let component: CertificateListItemComponent;
  let fixture: ComponentFixture<CertificateListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificateListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

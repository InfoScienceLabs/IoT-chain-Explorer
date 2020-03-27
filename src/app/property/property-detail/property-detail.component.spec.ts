import { async, fakeAsync, tick, discardPeriodicTasks, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Params } from '@angular/router';
import { BaseRequestOptions, Http, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { AceEditorDirective } from 'ng2-ace';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSnackBarModule } from '@angular/material';

import { Subject } from 'rxjs/Subject';

import { APIService } from '../../services/api-service/api.service';
import { DynamicViewLoaderComponent } from '../../dynamic-views/dynamic-view-loader/dynamic-view-loader.component';
import { EntityDetailComponent } from '../../entities/entity-detail/entity-detail.component';

import { PropertyComponent } from '../property/property.component';
import { PropertyDetailComponent } from './property-detail.component';

describe('PropertyDetailComponent', () => {
  let component: PropertyDetailComponent;
  let fixture: ComponentFixture<PropertyDetailComponent>;
  let backend: MockBackend;
  let params: Subject<Params> = new Subject<Params>();

  const transactionData: any = require('../../../assets/mock-data/transaction.json');
  const transactionID = 'b92e956f5eba91892bf4c1c1d5ed61a52f7f8b19c1bbbf3eefd9322377efd69b0966fcbcb102f21f8aab8cc4980b1fbb89d3ea8e032f3862a0a21a49f7c34966';


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AceEditorDirective,
        DynamicViewLoaderComponent,
        EntityDetailComponent,
        PropertyComponent,
        PropertyDetailComponent
      ],
      imports: [
        MatSnackBarModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ],
      providers: [
        APIService,
        BaseRequestOptions,
        MockBackend,
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        },
        {
          provide: ActivatedRoute,
          useValue: { params: params }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates an instance', () => {
    expect(component).toBeTruthy();
  });
});

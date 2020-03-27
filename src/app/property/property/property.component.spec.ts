import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AceEditorDirective } from 'ng2-ace';
import { PropertyComponent } from './property.component';

describe('PropertyComponent', () => {
  let component: PropertyComponent;
  let fixture: ComponentFixture<PropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AceEditorDirective,PropertyComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyComponent);
    component = fixture.componentInstance;
    component.data = {};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


it('ngOnChanges: populates instance with updated, formatted json data', () => {
  let data = {
    payload: {
      data: 'other data'
    }
  };
  let stringified = JSON.stringify(data.payload, null, 2);

  component.data = data;
  fixture.detectChanges();

  // call ngOnChanges manually because it's only called when
  // data is updated through a view, not programmatically
  component.ngOnChanges();

  expect(component.payloadJSON).toEqual(stringified);
});

it('getFormatData: gets formatting information needed for a transaction payload to be displayed in string form', () => {
  let data, stringified, result;

  // test that string data is simply passed through formatting
  data = 'sawtooth settings string';

  result = component.getFormatData(data);
  expect(result.data).toEqual(data);
  expect(result.aceDisplayMode).toEqual('text');

  // test that json data is turned into a string
  data = {
    property: 'some value',
    key: {
      data: 'more data'
    }
  };
  stringified = JSON.stringify(data, null, 2);

  result = component.getFormatData(data);
  expect(result.data).toEqual(stringified);
  expect(result.aceDisplayMode).toEqual('json');
});

it('getFormatData: handles formatting for incomplete/invalid data for a transaction payload', () => {
  let data, stringified, result;

  // number should turn into a string
  data = undefined;
  stringified = '';

  result = component.getFormatData(data);
  expect(result.data).toEqual(stringified);
  expect(result.aceDisplayMode).toEqual('text');
});

it('updatePayloadData: updates payload JSON given data from a transaction', () => {
  // test that json data is turned into a string
  let data = {
    property: 'some value',
    key: {
      data: 'more data'
    }
  };
  let stringified = JSON.stringify(data, null, 2);

  let result = component.updatePayloadData(data);
  expect(component.payloadJSON).toEqual(stringified);
  expect(component.aceMode).toEqual('json');
});

});

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { APIService } from '../../services/api-service/api.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import { MatSnackBar } from '@angular/material';
import { UIAceDataTransformPipe } from
  '../../pipes/ui-ace-data-transform/ui-ace-data-transform.pipe';
  
@Component({
  selector: 'app-state-by-id',
  templateUrl: './state-by-id.component.html',
  styleUrls: ['./state-by-id.component.scss']
})
export class StateByIdComponent implements OnInit {

//   /**
//    * @param activatedRoute {ActivatedRoute} - currently active route
//    * @param apiService {APIService} - service for making API calls
//    * @param snackBar {MatSnackBar} - service for showing snackbar notifications
//    */

// // name of the collection reached via API where an entity can be fetched
// // e.g., 'transactions', 'blocks'
// @Input() collection: string;

// // name of the entity for display
// @Input() displayName = 'Item';

// // component to load to show information about specific entity


// // ID of the batch (pulled from URL query string params)
// id: string;

// // data representing the block
// data;
// head;
// previous_block ;
// // whether the page is waiting on API response
// loading = true;

// // error data from API if it couldn't fetch the batch
// error: any;
// payloadJSON = '{}';
// states = [];

// // observable watching the API request for an async response
// private dataObservable: Observable<object>;

// // error message to display when unable to complete API request
// private apiErrorMessage = 'Error fetching ' + this.displayName.toLowerCase() + ' from API';

// // empty subject to make sure subscription is destroyed when component is
// // destroyed
// private ngUnsubscribe: Subject<any> = new Subject();

//   constructor(private activatedRoute : ActivatedRoute,
//               private apiService: APIService,
//               private snackBar: MatSnackBar ) { }
 

//   ngOnInit() {
//     this.states =  new Array();
//     this.loading= true;
//     this.activatedRoute.url.subscribe(data => {
//       if(data[1]){
//         this.id = data[1].toString();
//         this.apiService.getItemByID('state', this.id).subscribe((data : any) =>{
//           this.data = data.data;
//           this.head = data.head;
//           this.error = undefined;
//           this.loading = false;
//           this.payloadJSON = data.data;
//           this.previous_block = data.link;
//         },error => {
//           this.loading = false;
//           this.error = error.message ? error.message : this.apiErrorMessage + '.';
//           this.snackBar.open(this.error, undefined, {
//             duration: 3000,
//           })
//         });
//       }
//       else {
//         this.apiService.getItems('state').subscribe((data: any)=>{
//           this.states = data.data;

//           this.loading =false;
//         });
        
//       }
//     });
//   }

@Input() data = {};

// data stringified for Angular UI Ace to display
payloadJSON = '{}';

// set default UI Ace display to show as plain text (no syntax highlighting)
aceMode = 'text';

/**
 * @param uiAceDataTransformPipe {UIAceDataTransformPipe} - used to transform
 * data into a format displayable by Angular UI Ace
 */
constructor(private uiAceDataTransformPipe: UIAceDataTransformPipe) {}

// ngOnInit needed in addition to ngOnChanges because when this view is
// dynamically loaded as a component, ngOnInit fires, but ngOnChanges doesn't.
ngOnInit() {
  // format payload for Angular UI Ace
  this.updatePayloadData(this.data['payload']);
}

ngOnChanges() {
  // format payload for Angular UI Ace
  this.updatePayloadData(this.data['payload']);
}

/**
 * Updates transaction payload so it can be displayed in UI Ace
 * @param payloadData - data representing the payload within a transaction
 */
updatePayloadData(payloadData: any): void {
  // format payload for Angular UI Ace
  let formatRes = this.getFormatData(payloadData);
  this.payloadJSON = formatRes.data;
  this.aceMode = formatRes.aceDisplayMode;

}

/**
 * Gets formatting information needed for a transaction payload to be
 * displayed in string form.
 * @param payloadData - data representing the payload within a transaction
 * @returns {object} formatted transaction payload data
 */
getFormatData(payloadData: any): any {
  let formatResult = this.uiAceDataTransformPipe.parseForUIAce(payloadData);
  return formatResult;
}
}

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { APIService } from '../../services/api-service/api.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import { MatSnackBar } from '@angular/material';
import { StateComponent } from '../state/state.component';

@Component({
  selector: 'app-state-detail',
  templateUrl: './state-detail.component.html',
  styleUrls: ['./state-detail.component.scss']
})
export class StateDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  component = StateComponent;

}

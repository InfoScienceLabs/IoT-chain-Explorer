/**
 * Copyright 2017 PokitDok, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ------------------------------------------------------------------------------
 */
import {
  DomSanitizer,
  SafeHtml,
  SafeUrl,
  SafeStyle
} from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd, NavigationError } from '@angular/router';
import { OthersService } from './services/api-service/others.service';
import { MatTableModule, MatSnackBar, MatButtonModule } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router, private apiService : OthersService, private sanitizer:DomSanitizer,
              private snackBar : MatSnackBar) { }
  keyword = '';
  loading = true;
  // error data from API if it couldn't fetch the batch
  error: string;

  // error message to display when unable to complete API request
  private apiErrorMessage = 'Error fetching items from API';
  ngOnInit() {
    // scroll to top of page on route change
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) return;

      window.scrollTo(0, 0);

      this.loadingInterceptor(event);
    });
  }
  button: any;
  getDataFromSearch(keyword: string){
    this.apiService.getTransactionBySearch(keyword).subscribe((data: any) =>{
      let json = JSON.parse(data._body);
      let url = '../' +json.type+ '/' + json.id;
      this.router.navigate([url]);
      this.keyword = '';
    }, error =>{
      this.loading = false;
          this.error = error.message ? error.message : this.apiErrorMessage + '.';
          this.snackBar.open(this.apiErrorMessage
            , undefined, {
            duration: 3000,
          });
    })
  }
  loadingInterceptor(event): void {
    this.loading = event instanceof NavigationStart;
  }
}

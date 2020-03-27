import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class OthersService {
  apiURL: string;
  apiTimeout = 10000;

  constructor(private http: Http) {
    this.apiURL = environment.apiURL;

    // if API timeout specified, update
    if (environment.apiTimeout) {
      this.apiTimeout = environment.apiTimeout;
    }
  }

  getTransactionBySearch(id: any) {
    return this.http.get(this.apiURL + '/search/' + id)
      .pipe();
  }
}

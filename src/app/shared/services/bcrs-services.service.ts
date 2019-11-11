import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BcrsServicesService {

  constructor(public http: HttpClient) { }

  get() {
    const apiURL = `/api/services`;
    return this.http.get(apiURL);
  }
}

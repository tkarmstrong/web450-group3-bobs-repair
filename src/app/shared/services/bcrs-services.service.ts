/*
; =======================================================
; Title: services repair
; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson
; Date: 10 Nov 19
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/

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

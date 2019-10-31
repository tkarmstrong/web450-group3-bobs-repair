/*
; =======================================================
; Title:  security-question.service.ts (Week 6)
; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson
; Date:   29 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/

import { Injectable, APP_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SecurityQuestionService {

  constructor(private http: HttpClient) { }

  get() {
    const apiURL = `/api/security-questions`;
    return this.http.get(apiURL);
  }

  getQuestionById(id) {
    const apiURL = `/api/security-questions/${id}`;
    return this.http.get(apiURL);
  }
}

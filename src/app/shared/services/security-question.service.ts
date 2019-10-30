/*
=====================================
  ; Title: Summary Service
  ; Author: Tyler Armstrong, David Tarvin, Aaron Wilson
  ; Date: 29 Oct 2019
  ; Description: Service for retrieving security questions.
======================================
*/

import { Injectable } from '@angular/core';
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

  getQuestionById() {
    const apiURL = '/api/security-questions/:id';
    return this.http.get(apiURL);
  }
}

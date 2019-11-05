/*
; =======================================================
; Title: about us page
; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson
; Date: 4 Nov 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  private items: any = [
    {
      name: 'Bob',
      image: '../../../assets/images/employees/bob.jpg',
      position: 'Owner'
    },
    {
      name: 'Janet',
      image: '../../../assets/images/employees/janet.jpg',
      position: 'Manager'
    },
    {
      name: 'Jane',
      image: '../../../assets/images/employees/jane.jpg',
      position: 'Sales'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

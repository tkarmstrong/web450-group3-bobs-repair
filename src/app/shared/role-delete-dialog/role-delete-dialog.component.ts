/*
; =======================================================
; Title:  role-delete-dialog.component.ts (Week 6)
; Authors: Tyler Armstrong, [David Tarvin], Lea Trueworthy
; Date:   06 Nov 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/

import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-role-delete-dialog',
  templateUrl: './role-delete-dialog.component.html',
  styleUrls: ['./role-delete-dialog.component.css']
})
export class RoleDeleteDialogComponent implements OnInit {

  roleTitle: any;

  constructor(private dialogRef: MatDialogRef<RoleDeleteDialogComponent>, @Inject(MAT_DIALOG_DATA) data, private router: Router) {
    this.roleTitle = data.roleTitle;
  }

  ngOnInit() {
  }

}

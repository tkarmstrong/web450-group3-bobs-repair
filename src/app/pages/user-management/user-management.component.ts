/*
; =======================================================
; Title: user-management.component.ts (Week 6)
; Authors: Tyler Armstrong, [David Tarvin], Aaron Wilson
; Date: 29 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { UserDeleteDialogComponent } from './../../shared/user-delete-dialog/user-delete-dialog.component';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  users: any;
  displayedColumns = ['username', 'firstName', 'lastName', 'phoneNumber', 'address', 'email', 'functions' ];

  constructor(private http: HttpClient, private dialog: MatDialog) {
    this.http.get('/api/users').subscribe(res => {
      this.users = res;
      console.log(this.users);
    }, err => {
      console.log(err);
    })
  }

  ngOnInit() {
  }

  delete(userId, username) {
    const dialogRef = this.dialog.open(UserDeleteDialogComponent, {
      data: {
        username: username
      },
      disableClose: true,
      width: '800px'
    })

    dialogRef.afterClosed().subscribe(result => {
      if(result === 'confirm') {
        this.http.delete('/api/users/' + userId).subscribe(res => {
          console.log('User deleted');
          this.users = this.users.filter(u => u._id !== userId);
        })
      }
    })
  }
}

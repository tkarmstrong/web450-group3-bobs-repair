/*
; =======================================================
; Title:  user-details.component.ts (Week 6)
; Authors: Tyler Armstrong, [David Tarvin], Aaron Wilson
; Date:   29 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { error } from 'util';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: any;
  userId: string;
  form: FormGroup;
  Role: string = '';
  role: any;
  selected: string;
  SelectedRoleTitle: string;
  roleTitle: any;
  roles: any

  constructor(private route: ActivatedRoute, private http: HttpClient, private fb: FormBuilder, private router: Router) {
    this.userId = this.route.snapshot.paramMap.get('id');
    console.log('userId is ' + this.userId);

    this.http.get('/api/roles').subscribe(res => {
      this.role = res;
      //console.log("roletitle is  " + this.roleTitle)
      //console.log("role:  " + this.role);
      console.log("user role:  " + this.user.role);
      //console.log("user roleTitle" + this.user.roleTitle)
      //console.log("roles:  " + this.roles);
    }, err => {
      { { error } }
    },
      () => {
      });
  }

  saveUser() {
    console.log("clicked submit button");
    this.http.put('/api/users/update/' + this.userId, {
      firstName: this.form.controls['firstName'].value,
      lastName: this.form.controls['lastName'].value,
      phoneNumber: this.form.controls['phoneNumber'].value,
      address: this.form.controls['address'].value,
      email: this.form.controls['email'].value,
      role: this.role
    }).subscribe(res => {
      //localStorage.setItem('user', 'lastname');
      this.router.navigate(['/session/user-management'])
      console.log(this.user);

    })
  }
  ngOnInit() {
    this.http.get('/api/users/' + this.userId).subscribe(res => {
      console.log('The userId in the GET request is ' + this.userId);
      this.user = res;
      this.userId = res['userId'];
      this.selected = this.SelectedRoleTitle = res['roles'];
      console.log(this.SelectedRoleTitle)
      console.log('This user is ' + JSON.stringify(this.user));
    }, err => {
      console.log(err);
    }, () => {
      this.form.controls['firstName'].setValue(this.user.firstName);
      this.form.controls['lastName'].setValue(this.user.lastName);
      this.form.controls['phoneNumber'].setValue(this.user.phoneNumber);
      this.form.controls['address'].setValue(this.user.address);
      this.form.controls['email'].setValue(this.user.email);
      this.form.controls['roles'].setValue(this.role)
    })
    this.form = this.fb.group({
      firstName: [null, Validators.compose([Validators.required])],
      lastName: [null, Validators.compose([Validators.required])],
      phoneNumber: [null, Validators.compose([Validators.required])],
      address: [null, Validators.compose([Validators.required])],
      email: [null, Validators.compose([Validators.required])],
      role: [null, Validators.compose([Validators.required])]


    })
  }
  cancel() {
    this.router.navigate(['/session/user-management']);
  }
}
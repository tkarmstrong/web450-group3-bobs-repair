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

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: any;
  userId: string;
  form: FormGroup;
  roles: any;
  SelectedRole: string = '';
  selected: string

  constructor(private route: ActivatedRoute, private http: HttpClient, private fb: FormBuilder, private router: Router) {
    this.userId = this.route.snapshot.paramMap.get('id');

    this.http.get('/api/users/' + this.userId).subscribe(res => {
      this.user = res;
      this.selected = this.SelectedRole = res['role'];

    }, err => {
      console.log(err);
    }, () => {
      this.form.controls.firstName.setValue(this.user.firstName);
      this.form.controls.lastName.setValue(this.user.lastName);
      this.form.controls.phoneNumber.setValue(this.user.phoneNumber);
      this.form.controls.address.setValue(this.user.address);
      this.form.controls.email.setValue(this.user.email);
      this.form.controls.role.setValue(this.user.role);

      this.http.get('api/roles').subscribe(res => {
        this.roles = res;
        console.log(this.roles);
      }, err => {
        console.log(err);
      })
    });
  }

  ngOnInit() {
    this.form = this.fb.group({
      firstName: [null, Validators.compose([Validators.required])],
      lastName: [null, Validators.compose([Validators.required])],
      phoneNumber: [null, Validators.compose([Validators.required])],
      address: [null, Validators.compose([Validators.required])],
      email: [null, Validators.compose([Validators.required])],
      role: [null, Validators.compose([Validators.required])]
    })
  }

  saveUser() {
    console.log("clicked submit button");
    console.log(this.selected);

    this.http.put('/api/users/' + this.userId, {
      firstName: this.form.controls['firstName'].value,
      lastName: this.form.controls['lastName'].value,
      phoneNumber: this.form.controls['phoneNumber'].value,
      address: this.form.controls['address'].value,
      email: this.form.controls['email'].value,
      role: this.form.controls['role'].value
    }).subscribe(res => {
      this.router.navigate(['/session/user-management'])
      console.log(this.user);

    })
  }

  cancel() {
    this.router.navigate(['/session/user-management'])
  }
}

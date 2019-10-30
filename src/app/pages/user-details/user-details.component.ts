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

  constructor(private route: ActivatedRoute, private http: HttpClient, private fb: FormBuilder, private router: Router) {
    this.userId = this.route.snapshot.paramMap.get('userId');

    this.http.get('/api/users/' + this.userId).subscribe(res => {
      this.user = res;
    }, err => {
      console.log(err);
    }, () => {
      this.form.controls['firstName'].setValue(this.user.firstName);
      this.form.controls['lastName'].setValue(this.user.lastName);
      this.form.controls['phoneNumber'].setValue(this.user.phoneNumber);
      this.form.controls['address'].setValue(this.user.address);
      this.form.controls['email'].setValue(this.user.emai);
    })
  }

  ngOnInit() {
    this.form = this.fb.group({
      firstName: [null, Validators.compose([Validators.required])],
      lastName: [null, Validators.compose([Validators.required])],
      phoneNumber: [null, Validators.compose([Validators.required])],
      address: [null, Validators.compose([Validators.required])],
      email: [null, Validators.compose([Validators.required])]
    })
  }

  saveUser() {
    this.http.put('/api/users/' + this.userId, {
      firstName: this.form.controls['firstName'].value,
      lastName: this.form.controls['lastName'].value,
      phoneNumber: this.form.controls['phoneNumber'].value,
      address: this.form.controls['address'].value,
      email: this.form.controls['email'].value
    }).subscribe(res => {
      this.router.navigate(['/users'])
    })
  }

  cancel() {
    this.router.navigate(['/session/user-management'])
  }
}

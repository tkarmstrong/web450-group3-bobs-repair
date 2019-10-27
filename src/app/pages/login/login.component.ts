import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: string;
  userLogin: string;
  form: FormGroup;

  constructor(
    private cookie: CookieService,
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      userId: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern('^[0-9]*$')
        ])
      ],
      password: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern('/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm')
        ])
      ]
    });
  }

  onSubmit() {
    const apiBaseURL = '/api/user/';
    // tslint:disable-next-line: no-string-literal
    const userId = this.form.controls['userId'].value;

    this.http.get(apiBaseURL + userId).subscribe(res => {
      if (res) {
        this.cookie.set('isAuthenticated', 'true', 1);
        this.cookie.set(userId, 'true', 1);
        this.router.navigate(['/dashboard']);
      } else {
        this.errorMessage = 'Invalid User ID';
      }
    });
  }

}

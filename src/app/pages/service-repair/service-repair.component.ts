/*
; =======================================================
; Title: service repair page
; Authors: [Tyler Armstrong], David Tarvin, Lea Trueworthy
; Date: 05 Nov 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/


import { Component, OnInit } from '@angular/core';
import { BcrsServicesService} from '../../shared/services/bcrs-services.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-service-repair',
  templateUrl: './service-repair.component.html',
  styleUrls: ['./service-repair.component.css']
})
export class ServiceRepairComponent implements OnInit {
  errorMessage: string;
  data: any;
  serviceForm: FormGroup;
  invoice: any;

  constructor(
    private services: BcrsServicesService,
    private cookie: CookieService,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit() {

    this.services.get().subscribe(res => { this.data = res; });

    this.serviceForm = new FormGroup({
      passwordReset: new FormControl(),
      spywareRemoval: new FormControl(),
      ramUpgrade: new FormControl(),
      softwareInstallation: new FormControl(),
      tuneup: new FormControl(),
      keyboardCleaning: new FormControl(),
      discCleanup: new FormControl(),
      parts: new FormControl([Validators.required]),
      labor: new FormControl([Validators.required, Validators.pattern('[0-9]*')]),
      total: new FormControl(),
      date: new FormControl()
    });
  }

  onSubmit(formValues) {

    this.services.get().subscribe(res => { this.data = res; });

    if (!this.serviceForm) {
      // 1. Check if at least one service was selected.
      return this.errorMessage = 'You must select at least one service.';
    } else {
      // 2. Get values to build invoice

      // user
      console.log(this.cookie.getAll());

      for (const key in this.data) {
        if (this.data.hasOwnProperty(key)) {
          const service = this.data[key];

          if (service.control === 'passwordReset') {
            if (this.serviceForm.get('passwordReset').value) {
              console.log(service);
              // this.invoice.services.push(service);
            }
          }

        }
      }



      if (this.serviceForm.get('spywareRemoval').value) {
        this.invoice.spywareRemoval = this.data.spywareRemoval.cost;
      }

      const ramUpgrade = this.serviceForm.get('ramUpgrade').value;
      const softwareInstallation = this.serviceForm.get('softwareInstallation').value;
      const tuneup = this.serviceForm.get('tuneup').value;
      const keyboardCleaning = this.serviceForm.get('keyboardCleaning').value;
      const discCleanup = this.serviceForm.get('discCleanup').value;
      const parts = this.serviceForm.get('parts').value;
      const labor = this.serviceForm.get('labor').value;
      const total = this.serviceForm.get('total').value;

      // 3. Create Invoice object
      // this.invoice = {
      //   passwordReset,
      //   spywareRemoval,
      //   ramUpgrade,
      //   softwareInstallation,
      //   tuneup,
      //   keyboardCleaning,
      //   discCleanup,
      //   parts,
      //   labor: labor * 50
      // };

      // 4. Save Invoice to db

      // 5. Open Invoice Dialog

    }
  }
}

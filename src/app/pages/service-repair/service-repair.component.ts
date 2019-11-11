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
import * as moment from 'moment';
import { InvoiceDialogComponent } from '../../shared/invoice-dialog/invoice-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-service-repair',
  templateUrl: './service-repair.component.html',
  styleUrls: ['./service-repair.component.css']
})
export class ServiceRepairComponent implements OnInit {
  errorMessage: string;
  data: any;
  serviceForm: FormGroup;

  invoice = {
    dateCreated: '',
    services: [],
    partsCost: 0,
    laborHrs: 0,
    totalCost: 0,
    user: ''
  };

  constructor(
    private bcrsServices: BcrsServicesService,
    private cookie: CookieService,
    private router: Router,
    private http: HttpClient,
    private dialog: MatDialog
  ) { }

  ngOnInit() {

    this.bcrsServices.get().subscribe(res => {
      this.data = res;
    });

    this.serviceForm = new FormGroup({
      passwordReset: new FormControl(),
      spywareRemoval: new FormControl(),
      ramUpgrade: new FormControl(),
      softwareInstallation: new FormControl(),
      tuneup: new FormControl(),
      keyboardCleaning: new FormControl(),
      discCleanup: new FormControl(),
      parts: new FormControl(null, [Validators.required]),
      labor: new FormControl(null, [Validators.required, Validators.pattern('[0-9]*')])
    });
  }

  onSubmit(formValues) {

    this.bcrsServices.get().subscribe(res => {
      this.data = res;
    });

    const selectedServices = [];
    let sum = 0;

    // * 2. Get values to build invoice
    // user
    const cookies = this.cookie.getAll();

    if (!this.cookie.check) {
        this.router.navigate(['/']);
      }

    for (const key in cookies) {
      if (cookies.hasOwnProperty(key)) {
        if (key !== 'isAuthenticated') {
          this.invoice.user = key;
        }
      }
    }

      // Services
    for (const key in this.data) {
      if (this.data.hasOwnProperty(key)) {
        const service = this.data[key];

        if (service.control === 'passwordReset') {
          if (this.serviceForm.get('passwordReset').value) {
            selectedServices.push(
              {serviceText: service.serviceText, cost: service.cost}
            );
          }
        }

        if (service.control === 'spywareRemoval') {
          if (this.serviceForm.get('spywareRemoval').value) {
            selectedServices.push(
              {serviceText: service.serviceText, cost: service.cost}
            );
          }
        }

        if (service.control === 'ramUpgrade') {
          if (this.serviceForm.get('ramUpgrade').value) {
            selectedServices.push(
              {serviceText: service.serviceText, cost: service.cost}
            );
          }
        }

        if (service.control === 'softwareInstallation') {
          if (this.serviceForm.get('softwareInstallation').value) {
            selectedServices.push(
              {serviceText: service.serviceText, cost: service.cost}
            );
          }
        }

        if (service.control === 'tuneup') {
          if (this.serviceForm.get('tuneup').value) {
            selectedServices.push(
              {serviceText: service.serviceText, cost: service.cost}
            );
          }
        }

        if (service.control === 'keyboardCleaning') {
          if (this.serviceForm.get('keyboardCleaning').value) {
            selectedServices.push(
              {serviceText: service.serviceText, cost: service.cost}
            );
          }
        }

        if (service.control === 'discCleanup') {
          if (this.serviceForm.get('discCleanup').value) {
            selectedServices.push(
              {serviceText: service.serviceText, cost: service.cost}
            );
          }
        }

      }
    }

    this.invoice.services = selectedServices;

    // Date
    this.invoice.dateCreated = moment().format('DD-MMM-YYYY');

    // Parts & Labor
    const parts = this.serviceForm.get('parts').value;
    this.invoice.partsCost = parts;
    const labor = this.serviceForm.get('labor').value * 50;
    this.invoice.laborHrs = labor;

    // Total Cost
    selectedServices.forEach(service => {
      sum += service.cost;
    });

    sum += this.invoice.partsCost;
    sum += this.invoice.laborHrs;
    this.invoice.totalCost = parseFloat(sum.toFixed(2));


    // * 3. Save invoice to db.
    const apiBaseURL = '/api/invoices';
    const newInvoice = this.invoice;

    this.http.post(apiBaseURL, newInvoice).subscribe(res => {
      if (res) {
        console.log('Invoice added to db.');
      } else {
        this.errorMessage = 'Something went wrong.';
        console.log(`Error: ${this.errorMessage}`);
      }
    });

    // * 4. Open Invoice dialog
    const dialogRef = this.dialog.open(InvoiceDialogComponent, {
      width: '80%',
      height: '600px',
      data: this.invoice
    });

    // 5. Reload page
    dialogRef.afterClosed().subscribe(result => { location.reload(); });

  }
}

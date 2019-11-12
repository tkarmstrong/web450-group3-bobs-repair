/*
; =======================================================
; Title: purchase by service (Week 6)
; Authors: [Tyler Armstrong], David Tarvin, Aaron Wilson
; Date: 23 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-purchase-by-service',
  templateUrl: './purchase-by-service.component.html',
  styleUrls: ['./purchase-by-service.component.css']
})
export class PurchaseByServiceComponent implements OnInit {

  invoices: any;
  data: any;
  options: any;
  labels;
  passwordReset = 0;
  spywareRemoval = 0;
  ramUpgrade = 0;
  tuneup = 0;
  keyboardCleaning = 0;
  softwareInstallation = 0;
  discCleanup = 0;

  constructor(private http: HttpClient) {

    this.http.get('/api/invoices').subscribe(res => {
      this.invoices = res;

      // 1. Get labels for chart
      const labelsUnfiltered = [];
      const pieData = {};

      for (const item of this.invoices) {
        item.services.forEach(element => {
          labelsUnfiltered.push(element.serviceText);
        });
      }

      this.labels = labelsUnfiltered.filter((item, index) => {
        return labelsUnfiltered.indexOf(item) === index;
      });

      // 2. Get data for chart
      for (const item of this.invoices) {
        item.services.forEach(service => {
          // console.log(service);
          if (service.serviceText === 'Password Reset') {
            this.passwordReset += service.cost;
          }

          if (service.serviceText === 'Spyware Removal') {
            this.spywareRemoval += service.cost;
          }

          if (service.serviceText === 'Ram Upgrade') {
            this.ramUpgrade += service.cost;
          }

          if (service.serviceText === 'Tuneup') {
            this.tuneup += service.cost;
          }

          if (service.serviceText === 'Keyboard Cleaning') {
            this.keyboardCleaning += service.cost;
          }

          if (service.serviceText === 'Software Installation') {
            this.softwareInstallation += service.cost;
          }

          if (service.serviceText === 'Disc Cleanup') {
            this.discCleanup += service.cost;
          }

        });
      }

      // 3. Build object literal for data used in chart
      this.data = {
        labels: this.labels,
        datasets: [{
          data: [
            this.passwordReset.toFixed(2),
            this.spywareRemoval.toFixed(2),
            this.ramUpgrade.toFixed(2),
            this.tuneup.toFixed(2),
            this.keyboardCleaning.toFixed(2),
            this.softwareInstallation.toFixed(2),
            this.discCleanup.toFixed(2)
          ],
          backgroundColor: [
            '#1E3D1E',
            '#8AE58A',
            '#FEF5ED',
            '#8F478F',
            '#478F47',
            '#FBD1A9',
            '#E37209'
          ],
          hoverBackgroundColor: [
            '#1E3D1E',
            '#8AE58A',
            '#FEF5ED',
            '#8F478F',
            '#478F47',
            '#FBD1A9',
            '#E37209'
          ]
        }]
      };

      this.options = {
        title: {
          display: true,
          text: 'Purchases By Service In Dollars',
          fontSize: 22
        }
      };

    }, err => {
      console.log(err);
    });

  }

  ngOnInit() {
  }

}

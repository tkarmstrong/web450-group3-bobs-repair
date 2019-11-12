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
  labels;

  constructor(private http: HttpClient) {

    this.http.get('/api/invoices').subscribe(res => {
      this.invoices = res;

      // 1. Get labels for chart
      const labelsUnfiltered = [];

      for (const item of this.invoices) {
        item.services.forEach(element => {
          labelsUnfiltered.push(element.serviceText);
        });
      }

      this.labels = labelsUnfiltered.filter((item, index) => {
        return labelsUnfiltered.indexOf(item) === index;
      });

      // 2. Get data for chart

      // 3. Build object literal for data used in chart
      this.data = {
        labels: this.labels,
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ]
            }]
        };


    }, err => {
      console.log(err);
    });

  }

  ngOnInit() {
  }

}

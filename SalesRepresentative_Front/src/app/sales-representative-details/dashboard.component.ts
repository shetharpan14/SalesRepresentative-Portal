import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface SalesRep {
  representative_First_Name: string;
  representative_Last_Name: string;
  product_Type: string;
  region_Name: string;
  performance_Type: string;
}

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  objectKeys = Object.keys;

  // salesData: SalesRep[] = [];
  // productCount: any = {};
  // regionCount: any = {};
  // performanceCount: any = {};

  // constructor(private http: HttpClient) {}

  // ngOnInit() {
  //   this.http.get<SalesRep[]>('http://localhost:7111/api/SalesRepresentative/GetAllSalesRepresentativeData').subscribe(data => {
  //     this.salesData = data;
  //     this.calculateMetrics();
  //   });
  // }

  // calculateMetrics() {
  //   this.productCount = this.groupBy(this.salesData, 'product_Type');
  //   this.regionCount = this.groupBy(this.salesData, 'region_Name');
  //   this.performanceCount = this.groupBy(this.salesData, 'performance_Type');
  // }

  // groupBy(array: any[], key: string): any {
  //   return array.reduce((result, item) => {
  //     result[item[key]] = (result[item[key]] || 0) + 1;
  //     return result;
  //   }, {});
  // }

    // Example data for product performance
  productPerformance = [
    { name: 'Electronics', value: 5 },
    { name: 'Furniture', value: 3 },
    { name: 'Grocery', value: 7 }
  ];

  regionPerformance = [
    { name: 'California', value: 6 },
    { name: 'Texas', value: 4 }
  ];

  performanceLevels = [
    { name: 'Excellent', value: 5 },
    { name: 'Average', value: 4 },
    { name: 'Poor', value: 2 }
  ];


}

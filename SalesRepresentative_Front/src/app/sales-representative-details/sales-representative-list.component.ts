import { Component, inject, OnInit } from '@angular/core';
import { SalesRepresentativeDetailsService } from '../sales-representative-details/services/sales-representative-details.service';
import { SalesRepresentativeData, Product, Performance, Region } from '../sales-representative-details/models/sales-representative.model';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 

declare var bootstrap: any;
@Component({
  selector: 'app-sales-representative-list',
  imports: [CommonModule,FormsModule],
  templateUrl: './sales-representative-list.component.html',
  styleUrl: './sales-representative-list.component.css'
})
export class SalesRepresentativeListComponent implements OnInit{

  

  ngOnInit(): void{}

  //selectedRep: SalesRepresentativeData | null = null;

  salesRepresentativeDtlSrv = inject(SalesRepresentativeDetailsService);
  productList:Observable<any>= new Observable<any>();
  performanceList:Observable<any>= new Observable<any>();
  regionList:Observable<any>= new Observable<any>();
  objsalesRepresentativeDetails:Observable<any>= new Observable<any>()

  constructor(private salesRepresentativeDetailsService: SalesRepresentativeDetailsService, private router: Router) {
    debugger;
    this.productList = this.salesRepresentativeDtlSrv.getProductList();
    this.performanceList= this.salesRepresentativeDtlSrv.getPerformanceType();
    this.regionList=this.salesRepresentativeDtlSrv.getRegions();
    this.objsalesRepresentativeDetails=this.salesRepresentativeDtlSrv.getAllSalesRepresentative();
  }

  newSalesRepresentativeObj:any={
    salesRepresentative_Id: 0,
    representativeFirstName:'',
    representativeLastName:'',
    productType:'',
    performanceType:'',
    regionName:'',
    product_Id:0,
    performance_ID:0,
    region_ID:0
  }

  onEditSalesRepresentative(data: SalesRepresentativeData){
    debugger;
    this.salesRepresentativeDtlSrv.getSalesRepresentativeDetailById(data.SalesRepresentative_ID).subscribe(data => {
      //this.users = data;
    });
    this.router.navigate(['/sales-representative-details'], { state: { data } });
  }

  onDeleteSalesRepresentative(representative_Id: number){
    debugger;
    //this.selectedRep = data;
    this.salesRepresentativeDtlSrv.getSalesRepresentativeDetailById(representative_Id).subscribe(this.newSalesRepresentativeObj);
    new bootstrap.Modal(document.getElementById('deleteModal')).show();
    //this.salesRepresentativeDtlSrv.deleteSalesRepresentativeDetail(data.SalesRepresentative_ID)
  }
  // confirmDeleteRepresentative(data: SalesRepresentativeData) {
  //   if (this.selectedRep) {
  //     this.salesRepresentativeDtlSrv.deleteSalesRepresentativeDetail(data.SalesRepresentative_ID)
  //     this.selectedRep = null;
  //     bootstrap.Modal.getInstance(document.getElementById('deleteModal'))?.hide();
  //   }
  // }  
}

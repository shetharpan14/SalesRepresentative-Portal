import { Component, inject } from '@angular/core';
import { SalesRepresentativeDetailsService } from '../sales-representative-details/services/sales-representative-details.service';
import { SalesRepresentativeData, Product, Performance, Region } from '../sales-representative-details/models/sales-representative.model';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sales-representative-details',
  imports: [FormsModule, AsyncPipe],
  templateUrl: './sales-representative-details.component.html',
  styleUrl: './sales-representative-details.component.css'
})
export class SalesRepresentativeDetailsComponent {
  salesRepresentativeData: SalesRepresentativeData[] = [];
  filteredSalesRepresentativeDetails: any[] = [];
  objsalesRepresentativeDetails: any[] = [];

  isNewUser: boolean = false;
  isEdit: boolean = false;

  productList: Observable<any> = new Observable<any>();
  performanceList: Observable<any> = new Observable<any>();
  regionList: Observable<any> = new Observable<any>();

  productId: number | null = null;
  performanceId: number | null = null;
  regionId: number | null = null;
  searchText: string = '';

  salesRepresentativeDtlSrv = inject(SalesRepresentativeDetailsService);

  constructor(private salesRepresentativeDetailsService: SalesRepresentativeDetailsService, private router: Router) {}

  ngOnInit() {
    this.loadAll();
  }

  loadAll() {
    this.productList = this.salesRepresentativeDtlSrv.getProductList();
    this.performanceList = this.salesRepresentativeDtlSrv.getPerformanceType();
    this.regionList = this.salesRepresentativeDtlSrv.getRegions();

    this.salesRepresentativeDtlSrv.getAllSalesRepresentative().subscribe((data: any[]) => {
      this.objsalesRepresentativeDetails = data;
      this.filteredSalesRepresentativeDetails = data;
    });
  }

  newSalesRepresentativeObj: any = {
    salesRepresentative_Id: 0,
    representativeFirstName: '',
    representativeLastName: '',
    productType: '',
    performanceType: '',
    regionName: '',
    product_Id: 0,
    performance_Id: 0,
    region_Id: 0
  };

  changeView() {
    this.isNewUser = !this.isNewUser;
  }

  save() {
    if (this.isEdit) {
      this.salesRepresentativeDetailsService.updateSalesRepresentativeData(this.newSalesRepresentativeObj).subscribe(() => {
        alert('Data Updated!');
        this.reset();
        this.changeView();
      });
    } else {
      this.salesRepresentativeDetailsService.addNewsalesRepresentative(this.newSalesRepresentativeObj).subscribe(() => {
        alert('Data Inserted!');
        this.reset();
        this.changeView();
      });
    }
  }

  onEdit(id: number) {
    this.isEdit = true;
    this.salesRepresentativeDetailsService.getSalesRepresentativeDetailById(id).subscribe(rep => {
      this.newSalesRepresentativeObj = { ...rep };
      this.changeView();
    });
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete?')) {
      this.salesRepresentativeDetailsService.deleteSalesRepresentativeDetail(id).subscribe(() => {
        this.loadAll();
      });
    }
  }

  onSearch() {
    this.productId = Number(this.newSalesRepresentativeObj.product_Id);
    this.performanceId = Number(this.newSalesRepresentativeObj.performance_Id);
    this.regionId = Number(this.newSalesRepresentativeObj.region_Id);

    this.filteredSalesRepresentativeDetails = this.objsalesRepresentativeDetails.filter(rep => {
      const matchesProduct = this.productId ? rep.product_ID === this.productId : true;
      const matchesPerformance = this.performanceId ? rep.performance_ID === this.performanceId : true;
      const matchesRegion = this.regionId ? rep.region_ID === this.regionId : true;
      const matchesName = this.searchText
        ? rep.representative_First_Name.toLowerCase().startsWith(this.searchText.toLowerCase()) ||
          rep.representative_Last_Name.toLowerCase().startsWith(this.searchText.toLowerCase())
        : true;

      return matchesProduct && matchesPerformance && matchesRegion && matchesName;
    });
  }

  reset() {
    this.isEdit = false;
    this.newSalesRepresentativeObj = {
      salesRepresentative_Id: 0,
      representativeFirstName: '',
      representativeLastName: '',
      productType: '',
      performanceType: '',
      regionName: '',
      product_Id: 0,
      performance_Id: 0,
      region_Id: 0
    };
    this.loadAll();
  }
}

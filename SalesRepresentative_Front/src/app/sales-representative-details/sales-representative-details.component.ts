import { Component, inject, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { SalesRepresentativeDetailsService } from '../sales-representative-details/services/sales-representative-details.service';
import {
  SalesRepresentativeData,
  Product,
  Performance,
  Region
} from '../sales-representative-details/models/sales-representative.model';

declare var bootstrap: any;

@Component({
  selector: 'app-sales-representative-details',
  imports: [FormsModule, AsyncPipe],
  templateUrl: './sales-representative-details.component.html',
  styleUrl: './sales-representative-details.component.css'
})
export class SalesRepresentativeDetailsComponent {
  @ViewChild('toast', { static: false }) toastRef!: ElementRef;
  @ViewChild('deleteModal', { static: false }) deleteModalRef!: ElementRef;

  salesRepresentativeData: SalesRepresentativeData[] = [];
  filteredSalesRepresentativeDetails: any[] = [];
  objsalesRepresentativeDetails: any[] = [];

  productList: Observable<any> = new Observable<any>();
  performanceList: Observable<any> = new Observable<any>();
  regionList: Observable<any> = new Observable<any>();

  isNewUser: boolean = false;
  isEdit: boolean = false;

  productId: number | null = null;
  performanceId: number | null = null;
  regionId: number | null = null;
  searchText: string = '';

  deleteId: number | null = null;
  toastMessage: string = '';

  salesRepresentativeDtlSrv = inject(SalesRepresentativeDetailsService);

  constructor(
    private salesRepresentativeDetailsService: SalesRepresentativeDetailsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadAll();
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

  loadAll() {
    this.productList = this.salesRepresentativeDtlSrv.getProductList();
    this.performanceList = this.salesRepresentativeDtlSrv.getPerformanceType();
    this.regionList = this.salesRepresentativeDtlSrv.getRegions();

    this.salesRepresentativeDtlSrv.getAllSalesRepresentative().subscribe((data: any[]) => {
      this.objsalesRepresentativeDetails = data;
      this.filteredSalesRepresentativeDetails = data;
    });
  }

  changeView() {
    this.isNewUser = !this.isNewUser;
  }

  save() {
    if (this.isEdit) {
      this.salesRepresentativeDetailsService
        .updateSalesRepresentativeData(this.newSalesRepresentativeObj)
        .subscribe(() => {
          this.showToast('Data Updated...!');
          this.reset();
          this.changeView();
        });
    } else {
      this.salesRepresentativeDetailsService
        .addNewsalesRepresentative(this.newSalesRepresentativeObj)
        .subscribe(() => {
          this.showToast('Data Inserted...!');
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
    this.deleteId = id;
    const modalEl = this.deleteModalRef.nativeElement;
    const modal = new bootstrap.Modal(modalEl);
    modal.show();
  }

  confirmDelete() {
    if (this.deleteId !== null) {
      this.salesRepresentativeDetailsService
        .deleteSalesRepresentativeDetail(this.deleteId)
        .subscribe(() => {
          this.loadAll();
          this.showToast('Record deleted successfully...!');
          this.deleteId = null;

          const modalEl = this.deleteModalRef.nativeElement;
          const modal = bootstrap.Modal.getInstance(modalEl);
          modal.hide();
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

  showToast(message: string) {
    this.toastMessage = message;
    const toastElement = this.toastRef.nativeElement;
    const toast = new bootstrap.Toast(toastElement, { delay: 5000 });
    toast.show();
  }
}

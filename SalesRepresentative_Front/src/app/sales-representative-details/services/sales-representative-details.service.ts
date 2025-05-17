import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SalesRepresentativeData, Product, Performance,Region } from '../models/sales-representative.model';

@Injectable({
  providedIn: 'root'
})

export class SalesRepresentativeDetailsService {
  private apiUrl = 'http://localhost:7111/api/SalesRepresentative';

  constructor(private http: HttpClient) { }

  // getAllSalesRepresentative(){
  //   return this.http.get(`${this.apiUrl}/GetAllSalesRepresentativeData`);
  // }

  getAllSalesRepresentative(): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}/GetAllSalesRepresentativeData`);
}

  getProductList(){
    return this.http.get(`${this.apiUrl}/GetProductList`);
  }

  getPerformanceType(){
    return this.http.get(`${this.apiUrl}/GetPerformanceType`);
  }

  getRegions(){
    return this.http.get(`${this.apiUrl}/GetRegionList`);
  }

  getSalesRepresentativeDetailById(salesRepresentativeId: number): Observable<SalesRepresentativeData> {
    return this.http.get<SalesRepresentativeData>(`${this.apiUrl}/SalesRepresentativeDetails/${salesRepresentativeId}`);
  }

  // getSalesRepresentativeDetailById(id: number): Observable<SalesRepresentativeData> {
  //   return this.http.get<SalesRepresentativeData>(`${this.apiUrl}/SalesRepresentativeDetails/${id}`);
  //}

  addNewsalesRepresentative(objNewSalesRepresentative: any){
    debugger;
    return this.http.post(`${this.apiUrl}/AddSalesRepresentativeData`,objNewSalesRepresentative);
  }

  updateSalesRepresentativeData(rep: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/UpdateSalesRepresentativeData`, rep);
  }

  deleteSalesRepresentativeDetail(SalesRepresentative_ID: number): Observable<void> {
    debugger;
    return this.http.delete<void>(`${this.apiUrl}/DeleteSalesRepresentative/${SalesRepresentative_ID}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SalesRepresentativeData, Product, Performance, Region } from '../models/sales-representative.model';

@Injectable({
  providedIn: 'root'
})
export class SalesRepresentativeDetailsService {
  private apiUrl = 'http://localhost:7111/api/SalesRepresentative';

  constructor(private http: HttpClient) {}

  getAllSalesRepresentative(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/GetAllSalesRepresentativeData`)
      .pipe(catchError(this.handleError));
  }

  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/GetProductList`)
      .pipe(catchError(this.handleError));
  }

  getPerformanceType(): Observable<Performance[]> {
    return this.http.get<Performance[]>(`${this.apiUrl}/GetPerformanceType`)
      .pipe(catchError(this.handleError));
  }

  getRegions(): Observable<Region[]> {
    return this.http.get<Region[]>(`${this.apiUrl}/GetRegionList`)
      .pipe(catchError(this.handleError));
  }

  getSalesRepresentativeDetailById(salesRepresentativeId: number): Observable<SalesRepresentativeData> {
    return this.http.get<SalesRepresentativeData>(`${this.apiUrl}/SalesRepresentativeDetails/${salesRepresentativeId}`)
      .pipe(catchError(this.handleError));
  }

  addNewsalesRepresentative(objNewSalesRepresentative: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/AddSalesRepresentativeData`, objNewSalesRepresentative)
      .pipe(catchError(this.handleError));
  }

  updateSalesRepresentativeData(rep: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/UpdateSalesRepresentativeData`, rep)
      .pipe(catchError(this.handleError));
  }

  deleteSalesRepresentativeDetail(SalesRepresentative_ID: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/DeleteSalesRepresentative/${SalesRepresentative_ID}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any): Observable<never> {
    console.error('Error....!', error);
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TelpHistoryService {
  findAll(): Observable<any> {
    return this.http.get('https://lokakarya-spring-boot-production.up.railway.app/historytelkom/findAllPlan', {
      responseType: 'json',
    });
  }

  addTelpHistory(data: any): Observable<any> {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });
    const urlPost = 'https://lokakarya-spring-boot-production.up.railway.app/historytelkom/';
    return this.http.post<any>(urlPost, data, { headers });
  }

  editTelpHistory(data: any): Observable<any> {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });
    const urlPost = 'https://lokakarya-spring-boot-production.up.railway.app/historytelkom/';
    return this.http.put<any>(urlPost, data, { headers });
  }

  deleteTelpHistory(id: number): Observable<any> {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });
    return this.http.delete(
      'https://lokakarya-spring-boot-production.up.railway.app/historytelkom/deleteById?id=' + id
    );
  }

  getNominal(): Observable<any> {
    return this.http.get('https://lokakarya-spring-boot-production.up.railway.app/historytelkom/sumAll', {
      responseType: 'json',
    });
  }

  constructor(private http: HttpClient) {}
}

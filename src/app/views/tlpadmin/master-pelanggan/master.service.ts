import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  findAll(): Observable<any> {
    return this.http.get('https://lokakarya-spring-boot-production.up.railway.app/masterpelanggan/findAllPlan', {
      responseType: 'json',
    });
  }

  findAllUserId(): Observable<any> {
    return this.http.get('https://lokakarya-spring-boot-production.up.railway.app/users/findAllPlan', {
      responseType: 'json',
    });
  }

  findUsersByUserId(userId: number): Observable<any> {
    return this.http.get('https://lokakarya-spring-boot-production.up.railway.app/users/findById?id=' + userId, {
      responseType: 'json',
    });
  }

  addMasterPelanggan(data: any): Observable<any> {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });
    const urlPost = 'https://lokakarya-spring-boot-production.up.railway.app/masterpelanggan/';
    return this.http.post<any>(urlPost, data, { headers });
  }

  editPelanggan(data: any): Observable<any> {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });
    const urlPost = 'https://lokakarya-spring-boot-production.up.railway.app/masterpelanggan/';
    return this.http.put<any>(urlPost, data, { headers });
  }

  deleteMasterPelanggan(id: number): Observable<any> {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });
    return this.http.delete(
      'https://lokakarya-spring-boot-production.up.railway.app/masterpelanggan/deleteById?id=' + id
    );
  }

  findUserById(userId: number): Observable<any> {
    return this.http.get(`https://lokakarya-spring-boot-production.up.railway.app/users/findById?id=${userId}`, {
      responseType: 'json',
    });
  }

  constructor(private http: HttpClient) {}
}

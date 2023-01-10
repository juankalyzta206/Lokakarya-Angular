import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class TransaksiService {
  constructor(private http: HttpClient) {}

  //PANGGIL API SERVICE CEK SALDO
  getNasabah(param: number): Observable<any> {
    // return this.http.get(`https://lokakarya-spring-boot-production.up.railway.app/transaksiNasabah/cekSaldo?Nomor%20Rekening=${param}`,
    return this.http.get(
      `https://lokakarya-spring-boot-production.up.railway.app/transaksiNasabah/cekSaldo?Nomor%20Rekening=${param}`,
      {
        responseType: 'json',
      }
    );
  }

  //PANGGIL API SERVICE SETOR TUNAI
  getSetorTunai(norek: number, nominal: number): Observable<any> {
    // return this.http.post(`https://lokakarya-spring-boot-production.up.railway.app/transaksiNasabah/setor?Nomor%20Rekening=${norek}&Nominal=${nominal}`,
    return this.http.post(
      `https://lokakarya-spring-boot-production.up.railway.app/transaksiNasabah/setor?Nomor%20Rekening=${norek}&Nominal=${nominal}`,
      {
        responseType: 'json',
      }
    );
  }

  //PANGGIL API SERVICE TARIK TUNAI
  getTarikTunai(norek: number, nominal: number): Observable<any> {
    // return this.http.post(`https://lokakarya-spring-boot-production.up.railway.app/transaksiNasabah/tarik?Nomor%20Rekening=${norek}&Nominal=${nominal}`,
    return this.http.post(
      `https://lokakarya-spring-boot-production.up.railway.app/transaksiNasabah/tarik?Nomor%20Rekening=${norek}&Nominal=${nominal}`,
      {
        responseType: 'json',
      }
    );
  }

  // PANGGIL API SERVICE TRANSFER
  getTransfer(
    norekAsal: number,
    norekTujuan: number,
    nominal: number
  ): Observable<any> {
    // return this.http.post(`https://lokakarya-spring-boot-production.up.railway.app/transaksiNasabah/transfer?Nomor%20Rekening%20Asal=${norekAsal}&Nomor%20Rekening%20Tujuan=${norekTujuan}&Nominal=${nominal}`,
    return this.http.post(
      `https://lokakarya-spring-boot-production.up.railway.app/transaksiNasabah/transfer?Nomor%20Rekening%20Asal=${norekAsal}&Nomor%20Rekening%20Tujuan=${norekTujuan}&Nominal=${nominal}`,
      {
        responseType: 'json',
      }
    );
  }

  getAllNasabah(): Observable<any> {
    // return this.http.get("https://lokakarya-spring-boot-production.up.railway.app/masterBank/findAll",
    return this.http.get('https://lokakarya-spring-boot-production.up.railway.app/masterBank/findAll', {
      responseType: 'json',
    });
  }

  getBayartelepon(noRekening: number, noTelepon: number): Observable<any> {
    // return this.http.post(`https://lokakarya-spring-boot-production.up.railway.app/transaksiNasabah/bayarTelpon?Nomor%20Rekening=${noRekening}&No%20Telepon=${noTelepon}`,
    return this.http.post(
      `https://lokakarya-spring-boot-production.up.railway.app/transaksiNasabah/bayarTelpon?Nomor%20Rekening=${noRekening}&No%20Telepon=${noTelepon}`,
      {
        responseType: 'json',
      }
    );
  }

  findBayarTelepon(noRekening: number, noTelepon: number): Observable<any> {
    // return this.http.get(`https://lokakarya-spring-boot-production.up.railway.app/transaksiNasabah/findByNoRekAndNoTelp?Nomor%20Rekening=${noRekening}&No%20Telepon=${noTelepon}`,
    return this.http.get(
      `https://lokakarya-spring-boot-production.up.railway.app/transaksiNasabah/findByNoRekAndNoTelp?Nomor%20Rekening=${noRekening}&No%20Telepon=${noTelepon}`,
      {
        responseType: 'json',
      }
    );
  }

  //PANGGIL API SERVICE BAYAR TELEPON PERBULAN
  postBayarteleponPerBulan(
    noRekening: number,
    noTelepon: number,
    bulanKe: number
  ): Observable<any> {
    return this.http.post(
      `https://lokakarya-spring-boot-production.up.railway.app/transaksiNasabah/bayarTelponPerbulan?Nomor%20Rekening=${noRekening}&No%20Telepon=${noTelepon}&Bulan%20Tagihan=${bulanKe}`,
      {
        responseType: 'json',
      }
    );
  }

  getTotalTagihan(noRekening: number, noTelepon: number): Observable<any> {
    // return this.http.get(`https://lokakarya-spring-boot-production.up.railway.app/transaksiNasabah/findByNoRekAndNoTelp?Nomor%20Rekening=${noRekening}&No%20Telepon=${noTelepon}`,
    return this.http.get(
      `https://lokakarya-spring-boot-production.up.railway.app/transaksiNasabah/findTotalTagihan?Nomor%20Rekening=${noRekening}&No%20Telepon=${noTelepon}`,
      {
        responseType: 'json',
      }
    );
  }
}

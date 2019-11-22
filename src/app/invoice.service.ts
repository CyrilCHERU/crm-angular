import { Invoice } from './models/invoice';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private http: HttpClient) { }

  public all() {
    return this.http
      .get('http://localhost:8000/api/invoices')
      .pipe(
        map(response => response['hydra:member'] as Invoice[])
      );
  }

  public remove(id: number) {
    return this.http.delete('http://localhost:8000/api/invoices/' + id)
  }
}

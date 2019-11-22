import { Customer } from './models/customer';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  public all() {
    return this.http
      .get('http://localhost:8000/api/customers')
      .pipe(
        map(response => response['hydra:member'] as Customer[])
      );
  }
}

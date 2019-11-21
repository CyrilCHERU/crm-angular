import { Customer } from './models/customer';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  public all() {
    return this.http.get<Customer>('http://localhost:8000/api/customers');
  }
}

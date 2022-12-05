import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from './Transaction';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private httpClient: HttpClient) { }

  getAllData() {
    const url: string = "/assets/data/transactions.json";
    return this.httpClient.get<Transaction[]>(url);
  }

  getTransaction(id: string) {
    const url: string = "/assets/data/" + id + ".json";
    return this.httpClient.get<Transaction>(url);
  }
}

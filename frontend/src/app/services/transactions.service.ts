import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Player} from "../../models/player";
import {Transaction} from "../../models/transaction";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class TransactionsService {
  private transactions: string;
  private saveurl: string;


  constructor(private http: HttpClient) {
    this.transactions = 'http://localhost:8080/transactions';
    this.saveurl = 'http://localhost:8080/newtransaction';

  }
  public getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.transactions);
  }

  public save(transaction: Transaction) {
    return this.http.post<Transaction[]>(this.saveurl, transaction);
  }

}

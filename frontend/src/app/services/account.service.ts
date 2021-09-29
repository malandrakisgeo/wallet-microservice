import {Injectable} from '@angular/core';
import {Player} from "../../models/player";
import {Account} from "../../models/account";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class AccountService {
  private saveurl: string;
  private detailurl: string;
  private dlt: string;
  private acc: Observable<Account>;
  private accs: string;
  private url: string;


  constructor(private http: HttpClient
  ) {
    this.saveurl = 'http://localhost:8080/createAccount',
      this.url = 'http://localhost:8080/availableAccounts',
    this.detailurl='http://localhost:8080/walletDetails'
  }

  public getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(this.url);
  }


  public save(account: Account) {
    return this.http.post<Account[]>(this.saveurl, account);
  }

  public getDetails(id: String): Observable<Account>  {
    this.dlt = this.detailurl+'/'+ id;
    this.acc =  this.http.get<Account>(this.dlt);
    return this.acc;
  }
}

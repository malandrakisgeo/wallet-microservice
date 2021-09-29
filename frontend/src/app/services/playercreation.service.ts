import {Injectable} from '@angular/core';
import {Account} from "../../models/account";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Player} from "../../models/player";
import {ActivatedRoute, Router} from "@angular/router";

@Injectable()
export class PlayercreationService {
  private url: string;
  private deleteurl: string;
  private dlt: string;
  private players: string;
  private saveurl: string;


  constructor(private http: HttpClient
) {
    this.players = 'http://localhost:8080/players',
      this.deleteurl = 'http://localhost:8080/deleteplayer',
      this.saveurl = 'http://localhost:8080/createPlayer',
    this.url = 'http://localhost:8080/availableAccounts';
  }

  public getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(this.url);
  }

  public getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.players);
  }

  public delete(player: Player) {
    this.dlt = this.deleteurl+'/'+player.id.toString();
    return this.http.post(this.dlt, null);
  }
  public save(player: Player) {
    return this.http.post<Player[]>(this.saveurl, player);
  }


}


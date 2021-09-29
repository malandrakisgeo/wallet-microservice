import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Player} from "../../../models/player";
import {PlayercreationService} from "../../services/playercreation.service";
import {Account} from "../../../models/account";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.css']
})

export class CreatePlayerComponent implements OnInit {
  accs: Account[];
  player: Player;
  newaccount: Account;
  private usersUrl: string;



  constructor(
    private playerService: PlayercreationService,    private route: ActivatedRoute,
    private router: Router) {
  }
//ola deixnoun oti an uparxei ngOnInit den vazoume tipota ston konstrouktora.

  ngOnInit() {
    /*this.x = [
      "Alfreds Futterkiste",
      "Berglunds snabbköp",
      "Centro comercial Moctezuma",
      "Ernst Handel",
    ];*/

    //this.x = this.playerService.getAccounts();
    this.playerService.getAccounts().subscribe(data => {
      this.accs = data;
    });
    this.player = new Player();
  }

  onSave(){
    this.player.connectedAccount=1;
    this.playerService.save(this.player).subscribe(result => this.gotoUserList());

  }

  gotoUserList() {
    this.router.navigate(['/players']);
  }
}

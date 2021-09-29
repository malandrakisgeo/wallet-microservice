import { Component, OnInit } from '@angular/core';
import {Player} from "../../../models/player";
import {Account} from "../../../models/account";
import {PlayercreationService} from "../../services/playercreation.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AccountService} from "../../services/account.service";

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  account: Account;

  constructor(
    private accountService: AccountService,    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.account = new Account();

  }



  onSave(){
    this.accountService.save(this.account).subscribe(result => this.createPlayer());

  }

  createPlayer() {
    this.router.navigate(['/createPlayer']);
  }
}

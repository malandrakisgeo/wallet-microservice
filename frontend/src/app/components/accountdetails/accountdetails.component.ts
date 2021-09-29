import {Component, OnInit} from '@angular/core';
import {Account} from "../../../models/account";
import {ActivatedRoute} from "@angular/router";
import {PlayercreationService} from "../../services/playercreation.service";
import {AccountService} from "../../services/account.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-accountdetails',
  templateUrl: './accountdetails.component.html',
  styleUrls: ['./accountdetails.component.css']
})
export class AccountdetailsComponent implements OnInit {
  account: Account;
  userId: string;

  constructor(private activatedRoute: ActivatedRoute,
              private accountService: AccountService) {

  }

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe(params => {
      this.userId = params['clientId'];
      this.userId= this.activatedRoute.snapshot.params.clientId;
    });

    this.accountService.getDetails(this.userId).subscribe(data => {
      this.account = data;
    });


  }

}

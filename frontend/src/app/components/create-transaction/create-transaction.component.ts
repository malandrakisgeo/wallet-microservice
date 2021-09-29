import {Component, OnInit} from '@angular/core';
import {PlayercreationService} from "../../services/playercreation.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TransactionsService} from "../../services/transactions.service";
import {Account} from "../../../models/account";
import {Transaction} from "../../../models/transaction";
import {Player} from "../../../models/player";
import {AccountService} from "../../services/account.service";

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.css']
})
export class CreateTransactionComponent implements OnInit {
  newtransaction: Transaction;
  accs: Account[];

  constructor(private transactionService: TransactionsService,
              private route: ActivatedRoute,
              private accountService: AccountService,
              private router: Router) {
  }

  ngOnInit() {
    this.newtransaction = new Transaction();

    this.accountService.getAccounts().subscribe(data => {
      this.accs = data;
    });
  }


  onSave() {
    this.transactionService.save(this.newtransaction).subscribe(result => window.location.reload());

  }

}

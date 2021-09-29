import { Component, OnInit } from '@angular/core';
import {PlayercreationService} from "../../services/playercreation.service";
import {TransactionsService} from "../../services/transactions.service";
import {Player} from "../../../models/player";
import {Transaction} from "../../../models/transaction";

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  transactions: Transaction[];

  constructor(private transactionService: TransactionsService) { }

  ngOnInit() {
    this.transactionService.getTransactions().subscribe(data => {
      this.transactions = data;
    });
  }

}

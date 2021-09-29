import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from "./components/index/index.component";
import {CreatePlayerComponent} from "./components/create-player/create-player.component";
import {PlayerListComponent} from "./components/player-list/player-list.component";
import {TransactionsComponent} from "./components/transactions/transactions.component";
import {AccountdetailsComponent} from "./components/accountdetails/accountdetails.component";
import {CreateAccountComponent} from "./components/create-account/create-account.component";
import {CreateTransactionComponent} from "./components/create-transaction/create-transaction.component";

export const routes: Routes = [
  { path: 'createPlayer', component: CreatePlayerComponent },
  { path: 'createAccount', component: CreateAccountComponent },
  { path: 'players', component: PlayerListComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'account/:clientId', component: AccountdetailsComponent },
  { path: 'newTransaction', component: CreateTransactionComponent },
  //{ path: '', component: IndexComponent },
  /*{
    path: 'account',
    component: AccountdetailsComponent,
    children: [
      {path: ':clientId', component: AccountdetailsComponent}
    ]
  },*/


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

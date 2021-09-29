import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { CreatePlayerComponent } from './components/create-player/create-player.component';
import {PlayercreationService} from "./services/playercreation.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { PlayerListComponent } from './components/player-list/player-list.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import {TransactionsService} from "./services/transactions.service";
import { AppheaderComponent } from './components/appheader/appheader.component';
import { AccountdetailsComponent } from './components/accountdetails/accountdetails.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import {AccountService} from "./services/account.service";
import { CreateTransactionComponent } from './components/create-transaction/create-transaction.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CreatePlayerComponent,
    PlayerListComponent,
    TransactionsComponent,
    AppheaderComponent,
    AccountdetailsComponent,
    CreateAccountComponent,
    CreateTransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PlayercreationService, TransactionsService, AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }

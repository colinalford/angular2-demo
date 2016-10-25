import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ContractDetailComponent } from './Components/contract-detail/contract-detail.component';
import { AddContractComponent } from './Components/add-contract/add-contract.component';
import { ContractsComponent } from './Components/contracts/contracts.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ContractDetailComponent,
    AddContractComponent,
    ContractsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'add', component: AddContractComponent },
      { path: 'contract/:id', component: ContractDetailComponent },
      { path: 'contract', component: ContractsComponent},
      { path: '', component: ContractsComponent },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

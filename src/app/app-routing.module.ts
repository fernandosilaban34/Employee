import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {PageNotFoundComponent} from './component/page-not-found/page-not-found.component';
import { ListForexComponent } from './list-forex/list-forex.component';
import { AddTraderComponent } from './add-trader/add-trader.component';
import { TransaksiForexComponent } from './component/transaksi-forex/transaksi-forex.component';

const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'home', component : HomeComponent},
  {path : 'treding', component: ListForexComponent},
  {path : 'add', component : AddTraderComponent},
  {path : 'transaksi', component : TransaksiForexComponent},
  {path : '**', component : PageNotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

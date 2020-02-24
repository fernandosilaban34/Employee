import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { MatIconModule} from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { HeaderComponent } from './component/header/header.component';
import {ModalComponent} from './component/modal/modal.component';
import { ListForexComponent } from './list-forex/list-forex.component';
import { AddTraderComponent } from './add-trader/add-trader.component';
import { TransaksiForexComponent } from './component/transaksi-forex/transaksi-forex.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    HeaderComponent,
    ModalComponent,
    ListForexComponent,
    AddTraderComponent,
    TransaksiForexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxPaginationModule,
    FilterPipeModule,
    MatIconModule,
  ],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }

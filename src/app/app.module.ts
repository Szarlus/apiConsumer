import { Http, HttpModule } from '@angular/http';
import { ExchangeService } from './service/exchange.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [ ExchangeService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

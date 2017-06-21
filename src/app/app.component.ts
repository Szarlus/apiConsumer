import { ExchangeService } from './service/exchange.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exchange';
  private keys;
  private exchanges;

  /**
   *
   */
  constructor(private exchangeService: ExchangeService) {
    this.exchangeService.getExchanges()
    .subscribe(
      data => { 
        console.log(data);
        this.keys = Object.keys(data);
        this.exchanges = data;
      },
      err => console.log(err),
      () => console.log('req complete')
    );
  }
}

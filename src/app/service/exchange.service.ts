import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ExchangeService {

    url: string;
    headers: Headers;


constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('X-Requested-With', 'XMLHttpRequest');

    this.url = 'https://www.rkantor.com/update_rates/';
 }

getExchanges(): Observable<Object> {
    return this.http.get(this.url, {headers: this.headers})
        .map(body => { return body.json() } );
}


}
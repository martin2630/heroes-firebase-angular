import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/rx';


import {Heroe} from '../interfaces/heroe.interface';
import { GLOBAL } from './config';


@Injectable()
export class HeroeService {
  heroesUrl:  string;
  heroeUrl:  string;

  constructor(
                private _http: Http
  ) {
    this.heroesUrl = GLOBAL.heroesUrl;
    this.heroeUrl = GLOBAL.heroeUrl;
  }

  nuevoHeroe(heroe: Heroe) {
    let body = JSON.stringify( heroe );
    let headers =  new Headers({
      'content-type': 'application/json'
    });

    return this._http.post( this.heroesUrl, body, {headers: headers}).map((res) => res.json());
  }

  actualizarHeroe(heroe: Heroe, key$: string) {
    let url = this.heroeUrl + `${key$}.json`;
    let body = JSON.stringify( heroe );
    let headers =  new Headers({
      'content-type': 'application/json'
    });

    return this._http.put( url, body, {headers: headers}).map((res) => res.json());
  }

  obtenerHeroe(key$: string) {
    let url = this.heroeUrl + `${key$}.json`;
    let headers =  new Headers({
      'content-type': 'application/json'
    });

    return this._http.get( url, {headers: headers}).map((res) => res.json());
  }

  obtenerHeroes() {
    let url = this.heroesUrl;
    let headers =  new Headers({
      'content-type': 'application/json'
    });

    return this._http.get( url, {headers: headers}).map((res) => res.json());
  }

  elimininarHeroe(key$: string) {
    let url = this.heroeUrl + `${key$}.json`;
    let headers =  new Headers({
      'content-type': 'application/json'
    });

    return this._http.delete( url, {headers: headers}).map((res) => res.json());
  }

}

import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient, HttpResponse, JsonpInterceptor, JsonpClientBackend, HttpClientJsonpModule} from "@angular/common/http";  

import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoadScriptsService {

  constructor(
    private jsonp: HttpClient,
    private http: HttpClientModule,
    private httpClient: HttpClient
  ) { }

  private url = "https://bibbase.org/show?bib=https%3A%2F%2Fapi.zotero.org%2Fusers%2F5803499%2Fcollections%2FYMPLDFF4%2Fitems%3Fkey%3DVc359QTTC22udUa6fDiNoBFz%26format%3Dbibtex%26limit%3D100&jsonp=1"; 

  getBibData() {
    console.log(this.httpClient.jsonp(this.url, 'callback'));
    return this.httpClient.jsonp(this.url, 'callback')
    // .map(function(res: Response){
    //     return res.json() || {};
    // }).catch(function(error: any){return Observable.throw(error);
    };

}

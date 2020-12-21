import { Component, OnInit, Renderer2, Inject, Directive, Input } from '@angular/core';
// import {Http, Response, Jsonp} from "@angular/http";  

import { DOCUMENT } from '@angular/common';
import { LoadScriptsService } from '../services/load-scripts.service';
import { ZoteroLoadService } from '../services/zotero-load.service';

// @Directive({
//   selector: '[appLoadScript]'
// })

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {
  @Input('script') param:  any;

  // bibbaseUrl = "https://bibbase.org/show?bib=https%3A%2F%2Fapi.zotero.org%2Fusers%2F5803499%2Fcollections%2FYMPLDFF4%2Fitems%3Fkey%3DVc359QTTC22udUa6fDiNoBFz%26format%3Dbibtex%26limit%3D100&jsonp=1";
  bibbaseUrl = "https://bibbase.org/show?bib=https%3A%2F%2Fwww.ece.iastate.edu%2F%7Eduwe%2Fassets%2Fduwe-pubs.bib&jsonp=1"
  
  bibObject: any;

  constructor(
    private renderer2: Renderer2, @Inject(DOCUMENT) private _document,
    private loadScripts: LoadScriptsService,
    private loadZotero: ZoteroLoadService
  ) { }
  
  div = document.getElementById("target"); 
  // iWindow = (<HTMLIFrameElement> ).contentWindow;

        // div.onload = function() { 
        //     div.style.height = 
        //       div.contentWindow.document.body.scrollHeight + 'px'; 
        // } 

  bibData: any;

  ngOnInit() {   
    this.loadZotero.getConfig()
    .subscribe((data => {console.log(data); this.bibData = data}));
    ;
    // this.div.onload = this.heightAdjust;
    // this.bibObject = this.loadScript(this.bibbaseUrl);
    // this.loadScripts.getBibData()
    //   .subscribe(data => console.log());
  }

  // heightAdjust() {
  //   this.div.style.height = this.div.conte
  // }

//   getTestData(): Observable<any[]>{
//     return this.jsonp.get(this.url)
//     .map(function(res: Response){
//         return res.json() || {};
//     }).catch(function(error: any){return Observable.throw(error);
//     });
// }

  public loadScript2(url: String) {
    const s = this.renderer2.createElement('script');
    s.type = 'text/javascript';
    s.src = url;
    s.text = ``;
    this.renderer2.appendChild(this._document.body, s);
  }

  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.async = false;
    script.innerHTML = '';
    script.src = url;
    script.defer = true;
    body.appendChild(script);
    // console.log(this.body);
    return body;
  }
  
}

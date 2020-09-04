import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ZoteroLoadService {

  constructor(
    private http: HttpClient
  ) { }

  bibData: any;

  // zoteroUrl = "https://api.zotero.org/users/2341590/collections/IZ6PD2KZ/items/top?v=3";
  zoteroUrl = "https://api.zotero.org/users/475425/collections?v=3";
  // zoteroUrl = "https://api.zotero.org/users/475425/collections/9KH9TNSJ/items?format=bib";
  // groups/2555552/duwe-bib/library

  getConfig() {
    return this.http.get(this.zoteroUrl);
  }
}

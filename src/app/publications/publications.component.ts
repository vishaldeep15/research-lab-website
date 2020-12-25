import { Component, OnInit, Renderer2, Inject, Directive, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
// import { MatTableDataSource, MatSort, MatPaginator} from '@angular/material';
import  *  as  data  from  '../../assets/bib-files/duwe-bib.json';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {
  constructor() {}

  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['title', 'year'];
  
  ngOnInit() {   
    // console.log(data["records"][0]);
    this.dataSource.data = data["records"];

    console.log(this.dataSource.data);
    console.log(this.dataSource.data[0]);
    console.log(this.dataSource.data[1]);


  }
}

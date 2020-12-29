import { Component, OnInit, ViewChild, AfterViewInit, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import  *  as  data  from  '../../assets/bib-files/duwe-bib.json';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit, AfterViewInit {
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['title', 'year'];
  public bibEntry = new BibEntry();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  constructor(
    public dialog: MatDialog, 
  ) {}
  
  ngOnInit() {   
    // console.log(data["records"][0]);
    this.dataSource.data = data["records"];
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  openDialog(element) {
    // console.log(element.type);
    this.bibEntry.type = element.type;
    this.bibEntry.key = element.citekey;
    this.bibEntry.title = element.title;
    this.bibEntry.author = element.author;
    this.bibEntry.booktitle = element.booktitle;
    this.bibEntry.year = element.year;

    console.log(this.bibEntry);

    const dialogRef = this.dialog.open(DialogContent, {
      // height: '400px',
      width: '500px',
      data: {
        type: this.bibEntry.type,
        key: this.bibEntry.key,
        title: this.bibEntry.title,
        author: this.bibEntry.author,
        booktitle: this.bibEntry.booktitle,
        pages: null,
        year: this.bibEntry.year
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }
}

@Component({
  selector: 'dialog-content',
  templateUrl: 'dialog-content.html',
})
export class DialogContent implements OnInit {
  citeText: String;
  authorList: String = '';
  pubType: String;
  pubTitle: String;
  pubAuthor: String;
  pubBooktitle: String;
  pubYear: String;

  constructor(
    public dialogRef: MatDialogRef<DialogContent>,
    @Inject(MAT_DIALOG_DATA) public data: BibEntry) {}

  ngOnInit() {
    console.log(this.data.author.length);
    
    // for (let author of this.data.author){
    //   this.authorList += author.name + " and "; 
    // }
    for (let i=0; i<this.data.author.length; i++){
      this.authorList += this.data.author[i].name 
      if (i< this.data.author.length-1) {
        this.authorList += " and ";
      }
      
    }
    console.log(this.authorList);


    this.pubType = "@" + this.data.type + "{"  + this.data.key + ",";
    this.pubTitle = "  title={" + this.data.title +"},";
    this.pubAuthor = "  author=" + this.authorList + "},";
    if (this.data.booktitle == undefined) {
      this.pubBooktitle =  "  booktitle={},";
    } else {
      this.pubBooktitle =  "  booktitle={" + this.data.booktitle + "},";
    }
    this.pubYear = "  year={" +  this.data.year + "}}";
    // this.citeText = "@" + this.data.entry.type + "{" + this.data.entry.key + "," +
    // "title={" + this.data.entry.title +"}," + "author=" + this.data.entry.author.name + "}," +
    // "booktitle={" + this.data.entry.booktitle + "}," + "year={" +  this.data.entry.year + "}}";
    // console.log(this.citeText);
  }

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }
}

export class BibEntry {
  type: String;
  key: String;
  title: String;
  author: any;
  booktitle: String;
  pages: String;
  year: Number
}

// @inproceedings{deep2019revisiting,
    //   title={Revisiting Time Remanence Clocks for Energy Harvesting Wireless Sensor Nodes},
    //   author={Deep, Vishal and Mishra, Aditi and Qiao, Daji and Duwe, Henry},
    //   booktitle={Proceedings of the 7th International Workshop on Energy Harvesting \& Energy-Neutral Sensing Systems},
    //   pages={58--59},
    //   year={2019}
    // }

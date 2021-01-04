import { Component, OnInit, ViewChild, AfterViewInit, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

// import  *  as  data  from  '../../assets/bib-files/duwe-bib.json';
import  *  as  data  from  '../../assets/bib-files/duwe-lab-pubs.json';


@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit, AfterViewInit {
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['position', 'title', 'year', 'cite', 'slides', 'video', 'repo'];
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
    this.dataSource.data = data["records"];
    console.log(this.dataSource.data);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  openPdf(element) {
    window.open(element.pdf, '_blank', '', true);
  }

  openSlides(element) {
    window.open(element.slides, '_blank', '', true);
  }

  openVideo(element) {
    window.open(element.video, '_blank', '', true);
  }

  openRepo(element) {
    window.open(element.repo, '_blank', '', true);
  }

  openDialog(element) {
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
  styleUrls: ['./dialog-content.scss']
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
    for (let i=0; i<this.data.author.length; i++){
      this.authorList += this.data.author[i].name 
      if (i< this.data.author.length-1) {
        this.authorList += " and ";
      }
      
    }
    // console.log(this.authorList);
    this.pubType = "@" + this.data.type + "{"  + this.data.key + ",";
    this.pubTitle = "  title={" + this.data.title +"},";
    this.pubAuthor = "  author=" + this.authorList + "},";
    if (this.data.booktitle == undefined) {
      this.pubBooktitle =  "  booktitle={},";
    } else {
      this.pubBooktitle =  "  booktitle={" + this.data.booktitle + "},";
    }
    this.pubYear = "  year={" +  this.data.year + "}}";
  }
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

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})
export class ResearchComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  projects: project["projectInfo"][] =
    [
      { 
        name : "HARC (Heterogeneous  Array  of  Redundant  Persistent  Clocks) ",
        projectDescription : "HARC (Heterogeneous Array of Redundant Persistent Clocks), a novel solution to the problem of timekeeping for intermittent systems.",
        linkToPage: "/research/harc"
      },
      { 
        name : "Suspendisse ac consequat neque. Aenean.",
        projectDescription : "Praesent vel orci dictum lectus dapibus pretium eget vitae urna.",
        linkToPage: "/research/harc"
      },
      { 
        name : "Suspendisse ac consequat neque. Aenean.",
        projectDescription : "Praesent vel orci dictum lectus dapibus pretium eget vitae urna.",
        linkToPage: "/research/harc"
      },
    ];

  ngOnInit() {
  }

}

export class project {
  constructor(
    public  projectInfo  : {
      name : String,
      projectDescription : String,
      linkToPage: String
    }
  ) {}
}

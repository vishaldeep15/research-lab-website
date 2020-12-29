import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  professors: profile["memberInfo"][] =
    [{ 
      name : "Dr. Henry Duwe",
      designation : "Assistant Professor, Iowa State University",
      imagePath : "assets/images/henry_headshot.jpg",
      address: "321 Durham 613 Morrill Rd. Ames, IA 50011",
      phone: "515-294-2158",
      email: "duwe@iastate.edu",
      profileDescription : "Henry Duwe received his B.S. degree in computer engineering and computer science from the University of Wisconsin--Madison and his M.S. and Ph.D. in electrical and computer engineering (ECE) from the University of Illinois at Urbana-Champaign (UIUC). He is currently an Assistant Professor in the Electrical and Computer (ECpE) department at Iowa State University. His research interests include computer architecture, compilers, and design automation. Currently he is focussing on the architecture and design of dependable and intelligent ultra-low-power computer systems."
    }];

  gradStudents: profile["memberInfo"][] =
    [
      { 
        name : "Vishal Deep",
        designation : "Ph.D. Candidate",
        imagePath : "assets/images/Male_Business_Formal.png",
        address: "210 Durham 613 Morrill Rd. Ames, IA 50011",
        phone: "559-475-3777",
        email: "vdeep@iastate.edu",
        profileDescription : "Vishal Deep is currently a third-year Ph.D. student in Computer Engineering at Iowa State University. He received his M.S. degree from California State University, Fresno. His broad research interests include computer architecture, embedded systems, and Internet of Things (IoT). He has a particular interest in developing computational and communication primitives for batteryless and intermittently powered devices. "
      },
      { 
        name : "Rohit Sahu",
        designation : "Ph.D. Candidate",
        imagePath : "assets/images/Male_Business_Formal.png",
        address: "321 Durham 613 Morrill Rd. Ames, IA 50011",
        phone: "515-294-2158",
        email: "duwe@iastate.edu",
        profileDescription : "Hello! I am Rohit."
      },
      { 
        name : "Vishak Narayanan",
        designation : "M.S. Student",
        imagePath : "assets/images/Male_Business_Formal.png",
        address: "321 Durham 613 Morrill Rd. Ames, IA 50011",
        phone: "515-294-2158",
        email: "duwe@iastate.edu",
        profileDescription : "Hello! I am Vishak."
      },
      { 
        name : "Joyesh Philip",
        designation : "M.S. Student",
        imagePath : "assets/images/Male_Business_Formal.png",
        address: "321 Durham 613 Morrill Rd. Ames, IA 50011",
        phone: "515-294-2158",
        email: "duwe@iastate.edu",
        profileDescription : "Hello! I am Joyesh."
      },
      { 
        name : "Alexis Aurandt",
        designation : "M.S. Student",
        imagePath : "assets/images/Female_Business_Casual.png",
        address: "321 Durham 613 Morrill Rd. Ames, IA 50011",
        phone: "515-294-2158",
        email: "duwe@iastate.edu",
        profileDescription : "Hello! I am Alexis."
      }
    ]; 

  constructor() { }

  ngOnInit() {
  }

}

export class profile {
  constructor(
    public  memberInfo  : {
      name : String,
      designation : String,
      address: String,
      phone: String,
      email: String,
      imagePath : String,
      profileDescription : String,
    }
  ) {}
}
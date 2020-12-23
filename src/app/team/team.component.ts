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
      profileDescription : "Hello! I am Henry."
    }];

  gradStudents: profile["memberInfo"][] =
    [
      { 
        name : "Vishal Deep",
        designation : "Ph.D. Candidate",
        imagePath : "assets/images/Male_Business_Formal.png",
        profileDescription : "Hello! I am Vishal."
      },
      { 
        name : "Rohit Sahu",
        designation : "Ph.D. Candidate",
        imagePath : "assets/images/Male_Business_Formal.png",
        profileDescription : "Hello! I am Rohit."
      },
      { 
        name : "Vishak Narayanan",
        designation : "M.S. Student",
        imagePath : "assets/images/Male_Business_Formal.png",
        profileDescription : "Hello! I am Vishak."
      },
      { 
        name : "Joyesh Philip",
        designation : "M.S. Student",
        imagePath : "assets/images/Male_Business_Formal.png",
        profileDescription : "Hello! I am Joyesh."
      },
      { 
        name : "Alexis Aurandt",
        designation : "M.S. Student",
        imagePath : "assets/images/Female_Business_Casual.png",
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
      imagePath : String,
      profileDescription : String,
    }
  ) {}
}
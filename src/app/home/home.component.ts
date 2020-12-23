import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  // Slider Images
  slides = [
    {'image': 'assets/images/slide1.jpg', 'news': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod et dolore magna aliqua.'}, 
    {'image': 'assets/images/slide2.jpg', 'news': 'Maecenas nec velit eu turpis molestie dignissim.'}, 
    {'image': 'assets/images/slide3.jpg', 'news': 'Duis id lorem ac dolor consectetur aliquet et a lorem.'}
  ];

  // news: string[] = [
  //   "News 1", 
  //   "News 2", 
  //   "News 3"
  // ];

  ngOnInit() {
  }

}

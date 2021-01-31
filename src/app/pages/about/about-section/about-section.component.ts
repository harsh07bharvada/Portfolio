import { Component, OnInit } from '@angular/core';
import { fade, slideInFromRightAndFade } from 'src/app/animations/animations';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss'],
  animations: [
    slideInFromRightAndFade, fade
  ]
})
export class AboutSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openResume(event) {
    window.open("assets/files/Harsh_Bharvada.pdf", "_blank");
  }

}

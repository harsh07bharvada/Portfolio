import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-landing-section',
  templateUrl: './home-landing-section.component.html',
  styleUrls: ['./home-landing-section.component.scss']
})
export class HomeLandingSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  completeMealClicked(event: any): void {
    console.log("completeMeal clicked")
  }

}

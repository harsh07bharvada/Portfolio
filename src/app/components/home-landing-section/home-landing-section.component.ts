import { Component } from '@angular/core';

@Component({
  selector: 'app-home-landing-section',
  templateUrl: './home-landing-section.component.html',
  styleUrls: ['./home-landing-section.component.scss']
})
export class HomeLandingSectionComponent  {

  completeMealClicked(event: any): void {
    console.log("completeMeal clicked")
  }

}

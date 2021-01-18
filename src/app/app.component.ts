import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio';
  refreshClicked(event: any): void {
    console.log("Refresh clicked")
  }

  loveClicked(event: any): void {
    console.log("Love clicked")
  }

  completeMealClicked(event: any): void {
    console.log("completeMeal clicked")
  }

  onCheckboxChanged(event){
    console.log("Checkbox called");
  }

  onEmailChanged(event){
    console.log("Email called");
  }
}

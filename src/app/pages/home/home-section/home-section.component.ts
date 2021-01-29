import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.scss']
})
export class HomeSectionComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }

  goToDevProcess(){
    document.getElementById("devProcess").scrollIntoView({behavior:'smooth'});
  }

}

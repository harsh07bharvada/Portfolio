import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss']
})
export class AboutSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openResume(event){
    window.open("assets/files/Harsh_Bharvada.pdf","_blank");
  }

}

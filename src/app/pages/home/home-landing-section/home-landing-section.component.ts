import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { fade, slideInFromRightAndFade } from 'src/app/animations/animations';

@Component({
  selector: 'app-home-landing-section',
  templateUrl: './home-landing-section.component.html',
  styleUrls: ['./home-landing-section.component.scss'],
  animations:[
    slideInFromRightAndFade,fade
  ]
})
export class HomeLandingSectionComponent implements OnInit {


  @Output() scrollToDevProcess = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  goToDevProcess(event: any): void {
    this.scrollToDevProcess.emit();
  }

}

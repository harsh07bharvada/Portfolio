import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home-landing-section',
  templateUrl: './home-landing-section.component.html',
  styleUrls: ['./home-landing-section.component.scss']
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

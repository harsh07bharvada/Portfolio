import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { staggerFade } from 'src/app/animations/animations';

@Component({
  selector: 'app-dev-process-section',
  templateUrl: './dev-process-section.component.html',
  styleUrls: ['./dev-process-section.component.scss'],
  animations: [
    staggerFade
  ]
})
export class DevProcessSectionComponent implements OnInit {

  inView : boolean = false;
  @ViewChild('devProcess') devProcess: ElementRef;
  
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset + window.innerHeight;
    if (this.devProcess && this.devProcess.nativeElement.offsetTop <= scrollPosition) {
      this.inView = true;
    }
  }

}

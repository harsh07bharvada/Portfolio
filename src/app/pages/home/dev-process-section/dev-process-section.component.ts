import { Component, OnInit } from '@angular/core';
import { staggerFade } from 'src/app/animations/animations';

@Component({
  selector: 'app-dev-process-section',
  templateUrl: './dev-process-section.component.html',
  styleUrls: ['./dev-process-section.component.scss'],
  animations:[
    staggerFade
  ]
})
export class DevProcessSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

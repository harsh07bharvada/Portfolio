import { Component, Input, SimpleChanges } from '@angular/core';
import { ProcessInfoTypes, ProcessInfoTypeConfig } from './process-info-types.model';

@Component({
  selector: 'app-process-info',
  templateUrl: './process-info.component.html',
  styleUrls: ['./process-info.component.scss']
})
export class ProcessInfoComponent {

  @Input() type: ProcessInfoTypes = ProcessInfoTypes.RESEARCH;

  /** LOCAL STATE OBJECTS */

  styleState: object = {};
  dataState: any = {};

  /**
   *
   * @param changes
   */
  ngOnChanges(changes: SimpleChanges) {
    if (changes.type) {
      switch (this.type) {
        case ProcessInfoTypes.RESEARCH: this.dataState = ProcessInfoTypeConfig[ProcessInfoTypes.RESEARCH];
          break;
        case ProcessInfoTypes.DESIGN: this.dataState = ProcessInfoTypeConfig[ProcessInfoTypes.DESIGN];
          break;
        case ProcessInfoTypes.DEV: this.dataState = ProcessInfoTypeConfig[ProcessInfoTypes.DEV];
          break;
        case ProcessInfoTypes.QA: this.dataState = ProcessInfoTypeConfig[ProcessInfoTypes.QA];
          break; 
      }
    }

  }

}

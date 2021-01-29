import { Component, Input, SimpleChanges } from '@angular/core';
import { addClassToObject } from 'src/app/util/config.util';
import { ChipsColorClasses, ChipsColors } from './chips-colors.model';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent {

  @Input() type: ChipsColors = ChipsColors.DEFAULT;
  @Input() name: string = '';

  /** LOCAL STATE OBJECTS */
  styleState: object = {};

  /**
   *
   * @param changes
   */
  ngOnChanges(changes: SimpleChanges) {
    if (this.type)
      addClassToObject(this.styleState, [ChipsColorClasses[this.type]]);
  }
}

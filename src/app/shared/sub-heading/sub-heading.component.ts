import { Component, Input, SimpleChanges } from '@angular/core';
import { addClassToObject } from 'src/app/util/config.util';
import { SubHeadingColorClasses, SubHeadingColors } from './sub-heading-color.model';

@Component({
  selector: 'app-sub-heading',
  templateUrl: './sub-heading.component.html',
  styleUrls: ['./sub-heading.component.scss']
})
export class SubHeadingComponent  {

  @Input() subHeadingText: string = '';
  @Input() bgColor: SubHeadingColors  = SubHeadingColors.DEFAULT;
  /** LOCAL STATE OBJECTS */
  styleState: object = {};

  /**
   *
   * @param changes
   */
  ngOnChanges(changes: SimpleChanges) {
    if (this.bgColor)
      addClassToObject(this.styleState, [SubHeadingColorClasses[this.bgColor]]);
  }
}

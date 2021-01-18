import { Component, Input, SimpleChanges } from '@angular/core';
import { addClassToObject } from "../../util/config.util";
import { IconSize, IconSizeClasses } from "../../constants/icon-size.constants";

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  /** INPUT FROM PARENT COMPONENT */
  @Input() iconSize: IconSize = IconSize.MD;
  @Input() iconType: string = 'default';

  /** LOCAL STATE OBJECTS */
  iconStyleState: object = {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.iconSize) {
      addClassToObject(this.iconStyleState, [IconSizeClasses[this.iconSize]]);
    }
  }

}

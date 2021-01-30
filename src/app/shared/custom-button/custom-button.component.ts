import { Component, Input, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { FontSize, FontSizeClasses } from "../../constants/font-size.constants";
import { CustomButtonColorClasses, CustomButtonColors } from "./custom-button-color.model";
import { IconSize } from "../../constants/icon-size.constants";
import { addClassToObject } from "../../util/config.util";

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss']
})
export class CustomButtonComponent {
  
  /** INPUT FROM PARENT COMPONENT */
  @Input() btnLabel: string = 'Click Me..';
  @Input() isIconOnly: boolean = false;
  @Input() isIconActive: boolean = false;
  @Input() iconType: string = 'default';
  @Input() iconSize: IconSize = IconSize.MD;
  @Input() iconAnimation : string = '';
  @Input() size: FontSize = FontSize.BASE;
  @Input() bgColor: CustomButtonColors = CustomButtonColors.DEFAULT;

  /** OUTPUT TO PARENT COMPONENT */
  @Output() onBtnClicked = new EventEmitter();

  /** LOCAL STATE OBJECTS */
  styleState: object = {};

  /**
   *
   * @param changes
   */
  ngOnChanges(changes: SimpleChanges) {
    if (this.bgColor)
      addClassToObject(this.styleState, [CustomButtonColorClasses[this.bgColor]]);
    if (changes.size)
      addClassToObject(this.styleState, [FontSizeClasses[this.size]]);
  }

  /**
   *
   * @param event
   */
  btnClicked(event: any): void {
    this.onBtnClicked.emit(event);
  }

}

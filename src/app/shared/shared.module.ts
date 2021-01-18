import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { IconComponent } from './icon/icon.component';



@NgModule({
  declarations: [
    CustomButtonComponent,
    IconComponent,
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    CustomButtonComponent,
    IconComponent
  ]
})
export class SharedModule { }

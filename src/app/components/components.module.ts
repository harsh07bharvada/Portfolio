import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ContactSectionComponent } from './contact-section/contact-section.component';



@NgModule({
  declarations: [
    ContactSectionComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    ContactSectionComponent,
  ]
})
export class ComponentsModule { }

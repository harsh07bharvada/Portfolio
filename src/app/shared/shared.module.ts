import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { IconComponent } from './icon/icon.component';
import { HeadingComponent } from './heading/heading.component';
import { SubHeadingComponent } from './sub-heading/sub-heading.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProcessInfoComponent } from './process-info/process-info.component';



@NgModule({
  declarations: [
    CustomButtonComponent,
    IconComponent,
    HeadingComponent,
    SubHeadingComponent,
    NavbarComponent,
    ProcessInfoComponent,
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    ProcessInfoComponent,
    NavbarComponent,
    SubHeadingComponent,
    HeadingComponent,
    CustomButtonComponent,
    IconComponent
  ]
})
export class SharedModule { }

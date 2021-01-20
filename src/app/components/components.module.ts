import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { HomeLandingSectionComponent } from './home-landing-section/home-landing-section.component';
import { DevProcessSectionComponent } from './dev-process-section/dev-process-section.component';
import { RecommendationSectionComponent } from './recommendation-section/recommendation-section.component';



@NgModule({
  declarations: [
    HomeLandingSectionComponent,
    DevProcessSectionComponent,
    RecommendationSectionComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    RecommendationSectionComponent,
    DevProcessSectionComponent,
    HomeLandingSectionComponent
  ]
})
export class ComponentsModule { }

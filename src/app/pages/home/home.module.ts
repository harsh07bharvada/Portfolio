import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeLandingSectionComponent } from './home-landing-section/home-landing-section.component';
import { DevProcessSectionComponent } from './dev-process-section/dev-process-section.component';
import { RecommendationSectionComponent } from './recommendation-section/recommendation-section.component';
import { HomeSectionComponent } from './home-section/home-section.component';
import { ComponentsModule } from '../../components/components.module';
import { TechnologiesSectionComponent } from './technologies-section/technologies-section.component';

@NgModule({
  declarations: [HomeLandingSectionComponent, DevProcessSectionComponent,RecommendationSectionComponent, HomeSectionComponent, TechnologiesSectionComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule,
    SharedModule
  ]
})
export class HomeModule { }

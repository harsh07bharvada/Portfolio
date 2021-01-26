import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutSectionComponent } from './about-section/about-section.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutSectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }

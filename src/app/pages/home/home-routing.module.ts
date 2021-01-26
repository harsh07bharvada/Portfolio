import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeSectionComponent } from './home-section/home-section.component';

const routes: Routes = [
  {
    path: '',
    component: HomeSectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

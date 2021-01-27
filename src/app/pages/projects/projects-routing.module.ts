import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsSectionComponent } from './projects-section/projects-section.component'

const routes: Routes = [{
  path: 'projects',
  component: ProjectsSectionComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }

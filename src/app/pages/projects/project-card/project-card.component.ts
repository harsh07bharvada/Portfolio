import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input() project: any;

  constructor() { }

  ngOnChanges(changes: SimpleChanges){
    console.log("project:",this.project)
  }

  ngOnInit(): void {
  }

  viewProject(event) {
    console.log("Project Viewed");
    window.open(this.project.projectLiveLink, "_blank");
  }


  viewGithubProject(event) {
    console.log("Github Project Viewed");
    window.open(this.project.projectGithubLink, "_blank");

  }

}

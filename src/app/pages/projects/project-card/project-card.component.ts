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
  }

  ngOnInit(): void {
  }

  viewProject(event) {
    window.open(this.project.projectLiveLink, "_blank");
  }


  viewGithubProject(event) {
    window.open(this.project.projectGithubLink, "_blank");

  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommendation-section',
  templateUrl: './recommendation-section.component.html',
  styleUrls: ['./recommendation-section.component.scss']
})
export class RecommendationSectionComponent implements OnInit {

  testimonialDataList: Array<object> = [
    {
      feedback: '"Working with Harsh was a real pleasure. His technical abilities and problem solving skills are top notch. He is always ready to move out of his comfort zone and learn new technologies. His dedication towards work is really commendable. He would be an asset to the team/organization he works with."',
      feedbackBy: 'Shirsha Bhattacharyya'
    },
    {
      feedback: '"I rarely come across a self-motivated talent who stand out like Harsh. Harsh is proactive, result oriented, responsible and technically sound person and he is always ready to put all his energy and time to get the job done. Harsh’s ability to troubleshoot and analyse a technical problem was unlike any I’ve seen before."',
      feedbackBy: 'Neha Verma'
    },
    {
      feedback: '"Not many people can be so efficient as Harsh. I enjoyed working with Harsh for one year as full stack developer. I have always been amazed by Harsh’s ability to act in a highly stressful environment."',
      feedbackBy: 'Saurabh Srivastava'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  trackByFeedbackBy(index: number, testimonial: any) {
    return testimonial.feedbackBy;
  }
}

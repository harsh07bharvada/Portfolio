import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss']
})
export class ProjectsSectionComponent implements OnInit {

  projects: Array<any> = [
    {
      projectImg: 'structuresWizImg.png',
      projectName: 'Structures-Wiz',
      projectDescription: 'An optimised 🚀 implementation of Data structures like Stack, Queue, Priority Queue, Linked List etc for enterprise usage in our favourite ❤️ language - JavaScript',
      isProjectLinkPresent: true,
      projectLiveLink:'https://www.npmjs.com/package/structures-wiz',
      isProjectGithubLinkPresent: true,
      projectGithubLink:'https://github.com/harsh07bharvada/structures-wiz',
      isOpenSource: true
    },
    {
      projectImg: 'horrorscopeImg.png',
      projectName: 'Horrorscope',
      projectDescription: 'Webapp to explore more about your zodiac sign and which celebrity one shares it’s zodiac sign.',
      isProjectLinkPresent: true,
      projectLiveLink:'https://your-horrorscope.netlify.app/',
      isProjectGithubLinkPresent: true,
      projectGithubLink:'https://github.com/harsh07bharvada/Horrorscope',
      isOpenSource: false
    },
    {
      projectImg: 'clothingStoreImg.png',
      projectName: 'Clothing Store',
      projectDescription: 'Fashion e-commerce webapp with Stripe Payments integration.',
      isProjectLinkPresent: true,
      projectLiveLink:'https://thecloth.netlify.app/',
      isProjectGithubLinkPresent: true,
      projectGithubLink:'https://github.com/harsh07bharvada/Clothing-Store',
      isOpenSource: false
    }, {
      projectImg: 'elektrofyImg.png',
      projectName: 'Elektrofy',
      projectDescription: 'Electrical items e-commerce shop with images upload to Google drive for the clients',
      isProjectLinkPresent: true,
      projectLiveLink:'https://www.elektrofy.com/',
      isProjectGithubLinkPresent: true,
      projectGithubLink:'https://github.com/Elektrofy/Elektrofy',
      isOpenSource: false
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

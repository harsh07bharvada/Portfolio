export const ProcessInfoTypeConfig = {
    RESEARCH: {
        iconType: 'BEAKER',
        headingText: 'Research & Strategy',
        subHeadingText:'Ask First.',
        descriptionText: ' Before jumping into developing I always make sure what needs to be done and what I have to learn to hit the ground running. Then comes the process of breaking down work into atomic tasks and making sure the order and estimates of the tasks are perfect.'
    },
    DESIGN: {
        iconType: 'LIGHT_BULB',
        headingText: 'Brainstorming & Design',
        subHeadingText:'Problem Solving.',
        descriptionText: 'In this step I take up each atomic task and find the best approach to tackle the problem and discuss multiple ideas with team members and create a rough design for both front-end and back-end tasks.'
    },
    DEV: {
        iconType: 'CODE',
        headingText: 'Development',
        subHeadingText:'Bringing Ideas to life.',
        descriptionText:'This step is all about executing the atomic tasks laid out in the previous steps.'
    },
    QA: {
        iconType: 'CHECK_SHIELD',
        headingText: 'Quality Assurance',
        subHeadingText:'Testing. ',
        descriptionText:'This step involves unit as well as integration testing of the feature. Still working on learning to write automated testcases.'
    }
}

export enum ProcessInfoTypes {
    RESEARCH = 'RESEARCH',
    DESIGN = 'DESIGN',
    DEV = 'DEV',
    QA = 'QA'
}
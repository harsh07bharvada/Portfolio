import { animate, query, stagger, style, transition, trigger } from '@angular/animations';


export let slideInFromRightAndFade = trigger('slideInFromRightAndFade', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateX(15px)' }),
        animate('1s ease-in-out')
    ])
])

export let fade = trigger('fade', [
    transition(':enter', [
        style({ opacity: 0 }),
        animate('1s ease-in')
    ])
]);



export let staggerFade = trigger('staggerFade', [
    transition(':enter', [
        query('.eachStaggerComponent', [
            style({ opacity: 0, transform: 'translateY(100px)' }),
            stagger(130, [
                animate('750ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
            ])
        ])
    ])
]);


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

export let fadeInView = trigger('fadeInView', [
    transition('close => open', [
        style({ opacity: 0 ,transform: 'translateX(100px)'}),
        animate('750ms 250ms cubic-bezier(0.35, 0, 0.25, 1)')
    ])
]);



export let staggerFade = trigger('staggerFade', [
    transition('close => open', [
        query('.eachStaggerComponent', [
            style({ opacity: 0, transform: 'translateY(100px)' }),
            stagger(150, [
                animate('750ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
            ])
        ])
    ])
]);


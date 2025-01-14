import { animate, animateChild, group, query, stagger, state, style, transition, trigger } from "@angular/animations";
import exp from "constants";

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      style({position: 'relative'}),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
        }),
      ]),
      query(':enter', [style({left: '-100%'})], {optional: true}),
      query(':leave', animateChild(), {optional: true}),
      group([
        query(':leave', [animate('300ms ease-out', style({left: '100%'}))], {optional: true}),
        query(':enter', [animate('300ms ease-out', style({left: '0%'}))], {optional: true}),
      ]),
    ]),
    transition('* <=> *', [
      style({position: 'relative'}),
      query(
        ':enter, :leave',
        [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
          }),
        ],
        {optional: true},
      ),
      query(':enter', [style({left: '-100%'})], {optional: true}),
      query(':leave', animateChild(), {optional: true}),
      group([
        query(':leave', [animate('200ms ease-out', style({left: '100%', opacity: 0}))], {
          optional: true,
        }),
        query(':enter', [animate('300ms ease-out', style({left: '0%'}))], {optional: true}),
        query('@*', animateChild(), {optional: true}),
      ]),
    ]),
  ]);


  //image slide effects
  export const imgSlide = trigger('slide',
  [
 state('slideOut',style({
  position:'relative',
  bottom:'-150px',
  opacity:0
})),
state('slideIn',style({
  position:'relative',
  bottom:'0px',
  opacity:1
})),

  transition('slideOut => slideIn', [animate('180ms ease-out')]),
])


//text fade effect
export const fadeIn = trigger('fade',[
  state('fadeOut',style({
   opacity:0.5,
   bottom:'-30px'
  })),
  state('fadeIn',style({
  opacity:1,
  bottom:'0px'
  })),
transition('fadeOut=>fadeIn',[animate('1s 200ms ease')])
]) 

//bar line effect 
export const barLine = trigger('bar',[

    state("out",style({
      width:'0px'
    })),
    state('in',style({
      width:'100%'
    })),

    transition("out=> in",animate('1s'))
])

//about skills animations
export const skill = trigger('show',[

  transition(':enter',[
    query('.tech-item', [
      style({opacity: 0, transform: 'translateX(-10px)'}),
      stagger(100, [
        animate('1000ms cubic-bezier(0.35, 0, 0.25, 1)', style({opacity: 1, transform: 'none'})),
      ]),
  ])

])
])



//about text effect
export const fadeAbout = trigger('fade',[
  state('fadeOut',style({
   opacity:0,
   transform: 'translateY(20px)'
   
  })),
  state('fadeIn',style({
  opacity:1,
  transform: 'translateY(0px)'
  })),
transition('fadeOut=>fadeIn',[animate('1000ms 200ms ease')])
]) 



 
  
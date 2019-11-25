import { animation, style, animate } from '@angular/animations';

export const fadeIn = animation([
  style({ opacity: 0 }),
  animate('1s ease-out', style({ opacity: 1 }))
]);

export const fadeOut = animation([
  animate('1s ease-in', style({ opacity: 0 }))
]);

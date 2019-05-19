import {Directive, ElementRef, Input} from '@angular/core';
import {ScrollService} from "../services/scroll.service";
import {animate, AnimationBuilder, AnimationMetadata, AnimationPlayer, style} from "@angular/animations";

@Directive({
  selector: '[appFadeInOnce]'
})
export class FadeInOneDirective {

  @Input() delayInMs: number;

  constructor(private scrollService: ScrollService, private builder: AnimationBuilder, private el: ElementRef) {

    const subscription = scrollService.scrollY$.subscribe((position) => {
        const scrollPosition = position;
        const componentPosition = this.el.nativeElement.offsetTop;
        const windowHeight = window.innerHeight;
        const halfHeight = windowHeight / 4;

        if ((scrollPosition + windowHeight) - halfHeight >= componentPosition) {
          this.show();

          subscription.unsubscribe();
        }
    });


  }

  player: AnimationPlayer;

  show() {
    if (this.player) {
      this.player.destroy();
    }

    const factory = this.builder.build(this.fadeIn());
    const player = factory.create(this.el.nativeElement);

    player.play();
  }


  private fadeIn(): AnimationMetadata[] {
    return [
      style({ opacity: 0 }),
      animate('400ms ease-in', style({ opacity: 1 })),
    ];
  }


}

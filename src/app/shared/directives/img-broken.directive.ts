import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {

  @Input() customImg:string = ''
  @HostListener('error')handleError(): void {
    const elNative = this.elHost.nativeElement

    console.log('Esta imagen Revento', this.elHost);
    elNative.src = this.customImg
  }

  //TODO: HOST Host HOST
  constructor(private elHost: ElementRef) {
    
  }

}

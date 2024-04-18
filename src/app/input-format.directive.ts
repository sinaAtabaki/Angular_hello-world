import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]',
  standalone: true
})
export class InputFormatDirective {
  @Input('format') format: any;
  @Input('appInputFormat') inputFormat: any;

  constructor(private el: ElementRef) { }

  @HostListener('blur') onBlur(){
    let value: string = this.el.nativeElement.value;

    if(this.inputFormat == 'lowercase' || this.format == 'lowercase')
    this.el.nativeElement.value = value.toLowerCase();
    else if(this.inputFormat == 'uppercase' || this.format == 'uppercase')
    this.el.nativeElement.value = value.toUpperCase();
  }
}

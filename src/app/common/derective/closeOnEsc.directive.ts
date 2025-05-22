import { Directive, ElementRef, EventEmitter, HostListener, OnDestroy, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[appCloseOnEsc]',
  standalone: true,
})
export class CloseOnEscDirective implements OnInit, OnDestroy {
  @Output() closeOnEsc = new EventEmitter<void>();

  constructor(private el: ElementRef) { }

  ngOnDestroy(): void {
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKey(event: KeyboardEvent): void {
    this.closeOnEsc.emit();
  }

  ngOnInit(): void {
  }

}

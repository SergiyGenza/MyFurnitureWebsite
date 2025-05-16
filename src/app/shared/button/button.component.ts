import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() title: string = '';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() disabled: boolean = false;
  @Input() classList: string[] = [];

  @Output() buttonClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  get classes(): string[] {
    const classes = [
      'button',
    ];

    if (this.classList) {
      return classes.concat(
        this.classList
      )
    }
    return classes
  }

  public onClick(): void {
    if (this.disabled) return;
    this.buttonClick.emit();
  }
}

import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quantity',
  standalone: true,
  imports: [ButtonComponent, FormsModule],
  templateUrl: './quantity.component.html',
  styleUrl: './quantity.component.scss',
})
export class QuantityComponent {
  @Input() quantity!: number;
  @Output() quantityChange = new EventEmitter<number>();

  private readonly MIN_QUANTITY = 1;
  private readonly MAX_QUANTITY = 99;

  public increase(): void {
    if (this.quantity == 99) return;
    this.quantity = this.quantity + 1;

    this.quantityChange.emit(this.quantity);
  }

  public decrease(): void {
    this.quantity < 2
      ? this.quantity = this.quantity
      : this.quantity = this.quantity - 1;

    this.quantityChange.emit(this.quantity);
  }

  public onQuantityInput(value: number) {
    let limitedValue = value;

    limitedValue = Math.max(this.MIN_QUANTITY, Math.min(this.MAX_QUANTITY, limitedValue));

    if (this.quantity !== limitedValue) {
      this.quantity = limitedValue;
      this.quantityChange.emit(this.quantity);
    }
  }

  public validateKey(event: KeyboardEvent): void {
    const allowedKeys = [
      'Backspace', 'ArrowLeft', 'ArrowRight', 'Tab', 'Delete'
    ];

    const inputChar = event.key;
    const currentValue = this.quantity.toString();

    if (!/^\d$/.test(inputChar) && !allowedKeys.includes(inputChar)) {
      event.preventDefault();
      return;
    }

    const predicted = currentValue + inputChar;

    const number = Number(predicted);
    if (number > this.MAX_QUANTITY || number < this.MIN_QUANTITY) {
      event.preventDefault();
    }
  }

}


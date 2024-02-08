import { Component, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  @Input() remove!: boolean;
  @Input() removeAll!: boolean;
  @Output() isClose = new EventEmitter<any>();

  public onItemRemove(remove: boolean): void {
    this.isClose.emit(remove);
  }
  public onAllRemove(removeAll: boolean): void {
    this.isClose.emit(removeAll);
  }
}

import { Component, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  @Input() remove: boolean | undefined = undefined;
  @Input() removeAll: boolean | undefined = undefined;
  @Output() isClose = new EventEmitter<boolean>();
  @Output() canRemoveAll = new EventEmitter<boolean>();

  public onItemRemove(remove: boolean): void {
    this.isClose.emit(remove);
  }
  public onAllRemove(removeAll: boolean): void {
    this.canRemoveAll.emit(removeAll);
  }
}

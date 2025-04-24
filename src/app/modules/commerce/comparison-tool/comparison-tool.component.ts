import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Comparison, ComparisonItem } from 'src/app/common/models/comparison.model';
import { Product } from 'src/app/common/models/product.model';
import { ComparisonService } from 'src/app/services/comparison.service';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-comparison-tool',
    templateUrl: './comparison-tool.component.html',
    styleUrls: ['./comparison-tool.component.scss'],
    standalone: true,
    imports: [NgIf, NgFor, FormsModule, AsyncPipe]
})
export class ComparisonToolComponent {
  comparisonList$!: Observable<Comparison>;
  value: boolean = false;

  constructor(
    private comparisonService: ComparisonService,
  ) {
    this.comparisonList$ = comparisonService.comparisoneSubject$;
  }

  public onProductRemove(product: Product) {
    this.comparisonService.removeItemFromCompareList(product);
  }

  public onCheckCheckBoxChange(product: ComparisonItem) {
    this.comparisonService.updateCompare(product);
  }

  public checkIsDisabled(isCompare: boolean): boolean {
    if (isCompare) {
      return false;
    }
    return this.comparisonService.disableCheckBox();
  }

}

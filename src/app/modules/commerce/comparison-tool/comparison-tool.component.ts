import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Comparison, ComparisonItem } from 'src/app/common/models/comparison.model';
import { Product } from 'src/app/common/models/product.model';
import { ComparisonService } from 'src/app/services/comparison.service';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comparison-tool',
  templateUrl: './comparison-tool.component.html',
  styleUrls: ['./comparison-tool.component.scss'],
  standalone: true,
  imports: [FormsModule, AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComparisonToolComponent implements OnInit {
  private readonly comparisonService = inject(ComparisonService);
  public comparisonList$!: Observable<Comparison>;

  constructor() { }

  ngOnInit(): void {
    this.comparisonList$ = this.comparisonService.comparisoneSubject$;
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

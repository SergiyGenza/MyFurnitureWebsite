import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Breadcrumb } from 'src/app/common/models/breadcrumb.model';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';
import { NgClass, AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  standalone: true,
  imports: [NgClass, RouterLink, AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbComponent {
  @Input() min: boolean | null = false;
  private readonly breadcrumbService = inject(BreadcrumbService);

  public breadcrumbs$: Observable<Breadcrumb[]> = this.breadcrumbService.breadcrumbs$;

  constructor() { }

}

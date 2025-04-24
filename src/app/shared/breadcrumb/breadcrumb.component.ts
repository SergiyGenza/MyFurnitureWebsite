import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, map } from 'rxjs';
import { Breadcrumb } from 'src/app/common/models/breadcrumb.model';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';
import { NgIf, NgClass, NgFor, AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss'],
    standalone: true,
    imports: [NgIf, NgClass, NgFor, RouterLink, AsyncPipe]
})
export class BreadcrumbComponent implements OnInit, OnDestroy {
  @Input() min = false;
  subscription!: Subscription;
  breadcrumbs$: Observable<Breadcrumb[]>;

  constructor(private readonly breadcrumbService: BreadcrumbService) {
    this.breadcrumbs$ = breadcrumbService.breadcrumbs$;
  }

  ngOnInit(): void {
    this.subscription = this.breadcrumbs$.subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

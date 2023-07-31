import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Breadcrumb } from 'src/app/common/models/breadcrumb.model';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  breadcrumbs$: Observable<Breadcrumb[]>;

  constructor(private readonly breadcrumbService: BreadcrumbService) {
    this.breadcrumbs$ = breadcrumbService.breadcrumbs$;
  }

  ngOnInit(): void {
    this.breadcrumbs$
    // .pipe(
    //   map((breadcrumbs) => {
    //     return breadcrumbs.filter
    //   })
    // )
    .subscribe(
      // i => console.log(i)

    )
  }
}

import { Component, inject } from '@angular/core';
import { HeaderComponent } from './layout/header/header.component';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from './layout/footer/footer.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { filter, map, Observable, shareReplay, startWith } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, FooterComponent, BreadcrumbComponent, AsyncPipe]
})
export class AppComponent {
  public readonly title = 'eCommerce';
  public router = inject(Router);

  private readonly hiddenRoutes = ['/home', '/sign-up', '/auth'];
  private readonly minPatterns = ['/shop/*', '/blog/*'];
  private readonly hiddenLayout = ['/sign-up', '/auth'];

  private readonly currentUrl$: Observable<string> = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    map(() => this.router.url),
    startWith(this.router.url),
    shareReplay(1)
  );

  public readonly showBreadcrumb$: Observable<boolean> = this.currentUrl$.pipe(
    map(url => !this.hiddenRoutes.includes(url))
  );

  public readonly min$: Observable<boolean> = this.currentUrl$.pipe(
    map(url => this.minPatterns.some(pattern => this.matchesPattern(url, pattern)))
  );

  public readonly showLayout$: Observable<boolean> = this.currentUrl$.pipe(
    map(url => !this.hiddenLayout.includes(url))
  );

  private matchesPattern(url: string, pattern: string): boolean {
    const regexPattern = '^' + pattern.replace('*', '.*') + '$';
    return new RegExp(regexPattern).test(url);
  }

}

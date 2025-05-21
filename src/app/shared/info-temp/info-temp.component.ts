import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-info-temp',
  standalone: true,
  imports: [ButtonComponent, RouterLink],
  templateUrl: './info-temp.component.html',
  styleUrl: './info-temp.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoTempComponent {
  @Input() infoTitle!: string;
  @Input() btnTitle!: string;
}

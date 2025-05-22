import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FOOTER } from 'src/app/common/mocks/footer';
import { HEADER_CONTENT } from 'src/app/common/mocks/header';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from 'src/app/shared/button/button.component';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [RouterLink, ButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  @Input() minimize: boolean = false;

  public readonly header = HEADER_CONTENT;
  public readonly footer = FOOTER;
}

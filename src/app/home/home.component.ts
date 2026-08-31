import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { WhatsappUrlPipe } from '../whatsapp-url.pipe';

@Component({ selector: 'app-home', imports: [RouterLink, TranslatePipe, WhatsappUrlPipe], templateUrl: './home.component.html', styleUrl: './home.component.scss', changeDetection: ChangeDetectionStrategy.OnPush })
export class HomeComponent {
  protected readonly cardFlipped = signal(false);
  protected toggleCard(): void { this.cardFlipped.update((flipped) => !flipped); }
}
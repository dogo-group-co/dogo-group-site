import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe } from '@ngx-translate/core';
import { WhatsappUrlPipe } from './whatsapp-url.pipe';

@Component({
  selector: 'app-root',
  imports: [MatIconModule, TranslatePipe, WhatsappUrlPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  protected readonly cardFlipped = signal(false);

  protected toggleCard(): void { this.cardFlipped.update((flipped) => !flipped); }
}
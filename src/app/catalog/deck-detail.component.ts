import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { DECKS } from './decks.data';
import { WhatsappUrlPipe } from '../whatsapp-url.pipe';

@Component({
  selector: 'app-deck-detail',
  imports: [RouterLink, TranslatePipe, WhatsappUrlPipe],
  templateUrl: './deck-detail.component.html',
  styleUrl: './deck-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeckDetailComponent {
  private readonly route = inject(ActivatedRoute);
  protected readonly deck = computed(() => DECKS.find((deck) => deck.id === this.route.snapshot.paramMap.get('id')));
  protected imageClass(deckClass: string): string { return `deck-detail__image deck-detail__image--${deckClass}`; }
}
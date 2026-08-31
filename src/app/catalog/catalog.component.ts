import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { DECKS } from './decks.data';
import { Deck, DeckLanguage, DeckLine, DeckStatus } from './deck.model';

type FilterKey = 'language' | 'line' | 'theme' | 'age' | 'status';
type Filters = Record<FilterKey, string>;

const ALL_FILTERS = 'all';
const EMPTY_FILTERS: Filters = {
  language: ALL_FILTERS,
  line: ALL_FILTERS,
  theme: ALL_FILTERS,
  age: ALL_FILTERS,
  status: ALL_FILTERS,
};

@Component({
  selector: 'app-catalog',
  imports: [MatSelectModule, RouterLink, TranslatePipe],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly scope = (this.route.snapshot.data['line'] as DeckLine | undefined) ?? null;
  protected readonly filters = signal<Filters>({ ...EMPTY_FILTERS, line: this.scope ?? '' });
  protected readonly decks = computed(() => this.getFilteredDecks(this.filters()));
  protected readonly themes = [...new Set(DECKS.map((deck) => deck.theme))];
  protected readonly ages = [...new Set(DECKS.map((deck) => deck.age))];

  constructor() {
    this.route.queryParamMap.subscribe((params) => {
      this.filters.set({
        language: params.get('language') ?? ALL_FILTERS,
        line: this.scope ?? params.get('line') ?? ALL_FILTERS,
        theme: params.get('theme') ?? ALL_FILTERS,
        age: params.get('age') ?? ALL_FILTERS,
        status: params.get('status') ?? ALL_FILTERS,
      });
    });
  }

  protected updateFilter(key: FilterKey, value: string): void {
    const nextFilters = { ...this.filters(), [key]: value };
    this.setUrlFilters(nextFilters);
  }

  protected clearFilters(): void {
    this.setUrlFilters({ ...EMPTY_FILTERS, line: this.scope ?? '' });
  }

  protected deckImageClass(deck: Deck): string {
    return `catalog__deck-image catalog__deck-image--${deck.imageClass}`;
  }

  private setUrlFilters(filters: Filters): void {
    this.filters.set(filters);

    const queryParams = Object.fromEntries(
      Object.entries(filters).filter(([, value]) => value !== ALL_FILTERS),
    );

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams,
      queryParamsHandling: '',
    });
  }

  private getFilteredDecks(filters: Filters): readonly Deck[] {
    return DECKS.filter((deck) =>
      (filters.language === ALL_FILTERS || deck.language === filters.language as DeckLanguage) &&
      (filters.line === ALL_FILTERS || deck.line === filters.line as DeckLine) &&
      (filters.theme === ALL_FILTERS || deck.theme === filters.theme) &&
      (filters.age === ALL_FILTERS || deck.age === filters.age) &&
      (filters.status === ALL_FILTERS || deck.status === filters.status as DeckStatus),
    );
  }
}
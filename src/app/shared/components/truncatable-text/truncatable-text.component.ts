import { Component, input, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';

export interface ResponsiveLimits {
  sm: number;
  md: number;
  lg: number;
}

@Component({
  selector: 'app-truncatable-text',
  standalone: true,
  imports: [CommonModule, TooltipModule],
  template: `
    <div class="truncatable-container">
      @if (text().length > charLimit()) {
        <span class="truncated-text">{{ text().slice(0, charLimit()) }}...</span>
        <i 
          class="pi pi-info-circle ml-2 info-icon"
          [pTooltip]="text()"
          tooltipPosition="top"
          data-cy="truncatable-info-icon">
        </i>
      } @else {
        <span class="truncated-text">{{ text() }}</span>
      }
    </div>
  `,
  styles: [`
    .truncatable-container {
      display: flex;
      align-items: center;
      overflow: hidden;
    }
    .truncated-text {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .info-icon {
      cursor: pointer;
      color: var(--primary-color);
    }
  `]
})
export class TruncatableTextComponent implements OnInit, OnDestroy {
  text = input.required<string>();
  limits = input<ResponsiveLimits>({ sm: 20, md: 30, lg: 40 });

  charLimit = signal(this.limits().lg);

  private queries: [string, (e: MediaQueryListEvent) => void][] = [];

  ngOnInit(): void {
    const breakpoints = {
      sm: window.matchMedia('(max-width: 767px)'),
      md: window.matchMedia('(min-width: 768px) and (max-width: 991px)'),
      lg: window.matchMedia('(min-width: 992px)'),
    };

    const updateLimit = () => {
      if (breakpoints.sm.matches) {
        this.charLimit.set(this.limits().sm);
      } else if (breakpoints.md.matches) {
        this.charLimit.set(this.limits().md);
      } else {
        this.charLimit.set(this.limits().lg);
      }
    };

    // Initial check
    updateLimit();

    // Listen for changes
    Object.values(breakpoints).forEach(query => {
      const listener = (e: MediaQueryListEvent) => {
        if (e.matches) updateLimit();
      };
      query.addEventListener('change', listener);
      this.queries.push([query.media, listener]);
    });
  }

  ngOnDestroy(): void {
    this.queries.forEach(([media, listener]) => {
      window.matchMedia(media).removeEventListener('change', listener);
    });
  }
}

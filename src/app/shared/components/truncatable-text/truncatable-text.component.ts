import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';

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
export class TruncatableTextComponent {
  text = input.required<string>();
  charLimit = input(15); // Default character limit
}

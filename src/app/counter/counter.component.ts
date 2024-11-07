import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-counter',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterOutlet],
  template: `
    <div>
      <a class="link" routerLink="ui">UI</a>
      <router-outlet />
    </div>
  `,
  styles: ``,
})
export class CounterComponent {}

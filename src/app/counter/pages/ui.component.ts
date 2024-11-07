import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
} from '@angular/core';

@Component({
  selector: 'app-ui',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div data-testid="counter-feature-ui">
      <button
        class="btn btn-primary"
        [disabled]="isDisabled()"
        (click)="minus()"
      >
        -
      </button>
      <span data-testid="current" [textContent]="current()"></span>
      <button class="btn btn-primary" (click)="plus()">+</button>
      <a data-testid="fizzBuzz">{{ fizzbuzz() }}</a>
    </div>
  `,
  styles: ``,
})
export class UiComponent {
  isDisabled() {
    if (computed(() => this.current() - 1)() < 0) {
      return true;
    }
    return false;
  }
  current = signal(0);
  plus() {
    this.current.update((s) => s + 1);
  }
  minus() {
    this.current.update((s) => s - 1);
  }
  fizzbuzz = computed(() => {
    if (this.current() == 0) {
      return '';
    }
    let val = '';
    if (this.current() % 3 == 0) {
      val += 'Fizz';
    }
    if (this.current() % 5 == 0) {
      val += 'Buzz';
    }
    return val;
  });
}

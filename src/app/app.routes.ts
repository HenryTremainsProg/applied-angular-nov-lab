import { Routes } from '@angular/router';
import { canMatchFeature } from '@shared';

export const routes: Routes = [
  // whatever routes i need at the application level
  {
    path: 'demos',
    canMatch: [canMatchFeature('wip')],
    loadChildren: () =>
      import('./demos/demos.routes').then((d) => d.DEMOS_ROUTES),
  },
  {
    path: 'banking',
    loadChildren: () =>
      import('./banking/banking.routes').then((b) => b.BANKING_ROUTES),
  },

];

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActiveCartService } from '@spartacus/core';
import { MiniCartComponent } from '@spartacus/storefront';

@Component({
  selector: 'cx-mini-cart',
  templateUrl: './mini-cart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomMiniCartComponent extends MiniCartComponent {
  constructor(protected activeCartService: ActiveCartService) {
    super(activeCartService);
  }
}

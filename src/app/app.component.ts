import { Component, OnDestroy, OnInit } from '@angular/core';
import { BaseSiteService } from '@spartacus/core';
import { PageLayoutService } from '@spartacus/storefront';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy  {
  title = 'Electronicts SPA';
  baseSite$ = this.baseSiteService.getActive().pipe(switchMap((baseSiteID: string) => (this.baseSiteService.get(baseSiteID))));
  subscriptions = new Subscription();
  theme = '';
  pageID = '';

  constructor (
    private pageLayoutService: PageLayoutService,
    private baseSiteService: BaseSiteService,
  ) {}

  ngOnInit(): void {
    this.getCMSConfigs();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }

  getCMSConfigs() {
    this.pageID = 'non-cms-page';

    this.subscriptions.add(
      this.baseSite$.subscribe(baseSite => {
        if (baseSite?.theme) {
          this.theme = baseSite.theme;
        }
      })
    );

    this.subscriptions.add(
      this.pageLayoutService.page$.subscribe(page => {
        if (page.pageId) {
          this.pageID = page.pageId;
        }
      })
    );
  }
}

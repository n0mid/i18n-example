/**
 * Created by dusanov on 29/01/2018.
 */

import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.tpl.html'
})
export class HeaderComponent {

  public lang: string = 'en';

  change(lang) {
    this.lang = lang;

    this.translateService.use(this.lang);
  }

  constructor(private translateService: TranslateService) {
    this.translateService.use(this.lang);
  }
}

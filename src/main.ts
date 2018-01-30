import { enableProdMode, TRANSLATIONS, TRANSLATIONS_FORMAT  } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
declare const require;

if (environment.production) {
  enableProdMode();
}

const locale = localStorage.getItem('localeId');
let provider = [];

if (locale && locale !== 'en-US') {
  const translations = require(`raw-loader!./locale/messages.${locale}.xlf`);
  provider = [
    { provide: TRANSLATIONS, useValue: translations },
    { provide: TRANSLATIONS_FORMAT, useValue: 'xlf' },
  ]
}


platformBrowserDynamic().bootstrapModule(AppModule, {
  providers: provider
})
  .catch(err => console.log(err));

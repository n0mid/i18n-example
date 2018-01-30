/**
 * Created by dusanov on 30/01/2018.
 */

import { Injectable } from '@angular/core';
import { registerLocaleData } from '@angular/common';

import localeEn from '@angular/common/locales/en';
import localeRu from '@angular/common/locales/ru';
import localeFr from '@angular/common/locales/fr';

@Injectable()
export class SettingsService {

  private readonly LOCALE_KEY = 'localeId';

  public get language() {
    return this._language;
  }

  private _language: string;

  public initLanguage() {
      this._language = localStorage.getItem(this.LOCALE_KEY) || navigator.language;

      let local = null;

      switch (this._language) {
        case 'ru-RU':
          local = localeRu;
          break;
        case 'fr-FR':
          local = localeFr;
          break;
        case 'en-US':
          local = localeEn;
          break;
        default:
          this._language = 'en-US';
          local = localeEn;
      }

      registerLocaleData(local);

      return this._language;
  }

  public setLanguage(language) {
    localStorage.setItem('localeId', language);

    location.reload(true);
  }

  constructor() { }
}

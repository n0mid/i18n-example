/**
 * Created by dusanov on 29/01/2018.
 */

import { Component, OnInit } from '@angular/core';
import { SettingsService } from "../../services/settings.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.tpl.html'
})
export class HeaderComponent implements OnInit {
  
  public language: string; 
  
  ngOnInit() {
    this.language = this.settingsService.language;
  }
  
  changeLocale(locale) {
    this.settingsService.setLanguage(locale);
  }
  
  constructor(private settingsService: SettingsService) {}
}

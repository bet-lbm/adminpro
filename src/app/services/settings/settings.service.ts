import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class SettingsService {

  settings: Settings = {
    themeUrl: 'assets/css/colors/default-dark.css',
    theme: 'default-dark.css'
  };

  constructor(@Inject(DOCUMENT) private _document) {
    this.getSettings();
  }

  saveSettings() {
    // console.log('Guardado en el localStorage');
    localStorage.setItem('ajustes', JSON.stringify(this.settings));
  }

  getSettings() {
    if ( localStorage.getItem('ajustes') ) {
      this.settings = JSON.parse( localStorage.getItem('ajustes') );
      // console.log('Cargando del localStorage...');
      this.applyTheme(this.settings.theme);
    } else {
      // console.log('Usando valores por defecto');
    }
  }

  applyTheme(theme: string) {
    let url = `assets/css/colors/${theme}.css`;
    this._document.getElementById('theme').setAttribute('href', url);

    this.settings.themeUrl = url;
    this.settings.theme = theme;

    this.saveSettings();
  }
}

interface Settings {
  themeUrl: string;
  theme: string;
}

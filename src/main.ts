import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

import {TRANSLATIONS, TRANSLATIONS_FORMAT} from '@angular/core';
import {MissingTranslationStrategy} from '@angular/core';

if (environment.production) {
  enableProdMode();
}

declare const require;
const lang = navigator.languages[0];
alert(lang);

let translations = require(`raw-loader!./locale/messages.xlf`);

if (lang === 'fr') {
  translations = require(`raw-loader!./locale/messages.fr.xlf`);
}

platformBrowserDynamic().bootstrapModule(AppModule, {
  missingTranslation: MissingTranslationStrategy.Error,
  providers: [
    {provide: TRANSLATIONS, useValue: translations},
    {provide: TRANSLATIONS_FORMAT, useValue: 'xlf'}
  ]
});





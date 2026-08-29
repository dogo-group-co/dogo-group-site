import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
	providers: [
		provideHttpClient(),
		provideTranslateService({
			lang: 'es',
			fallbackLang: 'es',
			loader: provideTranslateHttpLoader({
				prefix: '/assets/i18n/',
				suffix: '.json',
			}),
		}),
	],
}).catch((error: unknown) => console.error(error));
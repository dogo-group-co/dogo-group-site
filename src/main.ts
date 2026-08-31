import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
	providers: [
		provideHttpClient(),
		provideRouter(routes),
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
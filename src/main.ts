import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { appRoutes } from './app/app-routing';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environments';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';


bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, AngularFireAuthModule, AngularFireModule.initializeApp(environment.firebaseConfig)),
    provideRouter(appRoutes)
  ]
})
  .catch(err => console.error(err));

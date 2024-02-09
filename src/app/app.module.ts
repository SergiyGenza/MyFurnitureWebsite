import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ShopingCartComponent } from './layout/components/shoping-cart/shoping-cart.component';

import { AngularFireModule } from '@angular/fire/compat'
import { environment } from 'src/environments/environments';
import { ClickStopPropagationDirective } from './common/derective/click-stop-propagation.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ShopingCartComponent,
    ClickStopPropagationDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

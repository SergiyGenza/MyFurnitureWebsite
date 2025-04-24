import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './main-page/main-page.component';
import { MainPageRoutingModule } from './main-page.routing';
import { PostBannerComponent } from './post-banner/post-banner.component';
// import { SliderComponent } from './slider/slider.component';



@NgModule({
    imports: [
    CommonModule,
    MainPageRoutingModule,
    MainPageComponent,
    PostBannerComponent,
],
    exports: [],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
})
export class MainModule { }

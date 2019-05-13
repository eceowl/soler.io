import { BrowserModule } from '@angular/platform-browser';
import {NgModule, Renderer2} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatDividerModule} from '@angular/material';


import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routing';
import { HeroComponent } from './hero/hero.component';
import { CoverComponent } from './cover/cover.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {HttpClientModule} from "@angular/common/http";
import { DrawerComponent } from './drawer/drawer.component';
import { NavigationButtonsComponent } from './navigation-buttons/navigation-buttons.component';
import { ToolbarBrandingComponent } from './toolbar-branding/toolbar-branding.component';
import { MainContentComponent } from './main-content/main-content.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HeroComponent,
    CoverComponent,
    DrawerComponent,
    NavigationButtonsComponent,
    ToolbarBrandingComponent,
    MainContentComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDividerModule,
    MatIconModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}



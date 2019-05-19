import { BrowserModule } from '@angular/platform-browser';
import {NgModule, Renderer2} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatDividerModule,
  MatCardModule, MatGridListModule
} from '@angular/material';


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
import { MainContentComponent } from './main-content/main-content.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { FadeInOneDirective } from './directives/fade-in-one.directive';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HeroComponent,
    CoverComponent,
    DrawerComponent,
    NavigationButtonsComponent,
    MainContentComponent,
    AboutComponent,
    PortfolioComponent,
    FooterComponent,
    ContactComponent,
    FadeInOneDirective,
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
    MatCardModule,
    MatGridListModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}



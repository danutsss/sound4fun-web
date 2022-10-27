import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Layout components.
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';

// Font Awesome 6 module.
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TopSectionComponent } from './shared/components/top-section/top-section.component';
import { SelectCarComponent } from './shared/components/select-car/select-car.component';
import { StarlightComponent } from './starlight/starlight.component';
import { AmbientaleComponent } from './ambientale/ambientale.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutComponent,
    ContactComponent,
    PortofolioComponent,
    NavbarComponent,
    FooterComponent,
    TopSectionComponent,
    SelectCarComponent,
    StarlightComponent,
    AmbientaleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

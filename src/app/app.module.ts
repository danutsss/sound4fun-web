import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Layout components.
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortofolioComponent } from './components/portofolio/portofolio.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SelectCarComponent } from './shared/components/select-car/select-car.component';
import { StarlightComponent } from './components/starlight/starlight.component';
import { AmbientaleComponent } from './components/ambientale/ambientale.component';
import { TopSectionComponent } from './shared/components/top-section/top-section.component';
import { ShowCarInfoComponent } from './shared/components/show-car-info/show-car-info.component';

// Angular Material modules.
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

// Angular Google Maps module.
import { GoogleMapsModule } from '@angular/google-maps';

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
    ShowCarInfoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    MatIconModule,
    GoogleMapsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

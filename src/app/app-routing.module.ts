import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Layout components.
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { AmbientaleComponent } from './ambientale/ambientale.component';
import { StarlightComponent } from './starlight/starlight.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'portofolio', component: PortofolioComponent },
  { path: 'ambientale', component: AmbientaleComponent },
  { path: 'starlight', component: StarlightComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

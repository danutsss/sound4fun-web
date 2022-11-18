import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Layout components.
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortofolioComponent } from './components/portofolio/portofolio.component';
import { AmbientaleComponent } from './components/ambientale/ambientale.component';
import { StarlightComponent } from './components/starlight/starlight.component';
import { RecenziiComponent } from './components/recenzii/recenzii.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'portofolio', component: PortofolioComponent },
  { path: 'ambientale', component: AmbientaleComponent },
  { path: 'starlight', component: StarlightComponent },
  { path: 'recenzii', component: RecenziiComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

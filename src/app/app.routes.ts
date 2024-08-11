import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CareersComponent } from './careers/careers.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ManagedSecurityServiceProviderComponent } from './managed-security-service-provider/managed-security-service-provider.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'managed-security-service-provider', component: ManagedSecurityServiceProviderComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

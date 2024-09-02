import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CareersComponent } from './careers/careers.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ManagedSecurityServiceProviderComponent } from './managed-security-service-provider/managed-security-service-provider.component';
import { UserAwarenessTrainingComponent } from './user-awareness-training/user-awareness-training.component';
import { PenetrationTestingComponent } from './penetration-testing/penetration-testing.component';
import { VulnerabilityManagementComponent } from './vulnerability-management/vulnerability-management.component';
import { FirewallManagementComponent } from './firewall-management/firewall-management.component';
import { OutsourcedItSupportComponent } from './outsourced-it-support/outsourced-it-support.component';
import { NetworkSecurityAndOptimizationComponent } from './network-security-and-optimization/network-security-and-optimization.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'managed-security-service-provider', component: ManagedSecurityServiceProviderComponent},
  { path: 'user-awareness-training', component: UserAwarenessTrainingComponent},
  { path: 'penetration-testing', component: PenetrationTestingComponent },
  { path: 'vulnerability-management', component: VulnerabilityManagementComponent },
  { path: 'firewall-management', component: FirewallManagementComponent },
  { path: 'outsourced-it-support', component: OutsourcedItSupportComponent },
  { path: 'network-security-and-optimization', component: NetworkSecurityAndOptimizationComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // Automatically scrolls to the top of the page
      anchorScrolling: 'enabled',           // Enables scrolling to anchor links within the page
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

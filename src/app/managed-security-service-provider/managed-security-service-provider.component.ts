import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-managed-security-service-provider',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './managed-security-service-provider.component.html',
  styleUrl: './managed-security-service-provider.component.css'
})
export class ManagedSecurityServiceProviderComponent {
  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
  areas = [
    'Application Protection',
    'Channel Protection',
    'Endpoint Detection',
    'Human Resources',
    'Infrastructure Protection'
  ];

  services = [
    {
      title: 'Penetration Tests',
      description: 'Tests to determine if our ethical hackers can enter your system undetected and launch a contained exploit.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Vulnerability Assessments',
      description: 'Determines how many vulnerabilities your network and infrastructure have, how severe they are, and steps to remediate.',
      icon: 'fas fa-search'
    },
    {
      title: 'Application Assessments',
      description: 'Scan your web applications and APIs to expose vulnerabilities, determining severity and providing recommendations for remediation.',
      icon: 'fas fa-laptop-code'
    },
    {
      title: 'Firewall Assessments',
      description: 'Conduct regular Firewall Assessments to determine if your firewall is configured correctly and is effectively protecting your organisation from threats.',
      icon: 'fas fa-fire'
    },
    {
      title: 'Awareness Campaigns',
      description: 'We test the security awareness of employees, scoring your overall cybersecurity awareness, and providing individualised training to those who require it.',
      icon: 'fas fa-bullhorn'
    },
    {
      title: 'Managed Platform',
      description: 'A platform that provides a holistic view of threats, incidents, activities, and expert analyses to ensure accurate monitoring and remediation. Safely stored and easily accessed.',
      icon: 'fas fa-server'
    }
  ];
}

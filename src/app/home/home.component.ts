import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CountUpModule  } from 'ngx-countup';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CountUpModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  experienceItems = [
    { id: 'count1', count: 5, description: 'Years Experience in Cybersecurity' },
    { id: 'count2', count: 300, description: 'Clients Trust Us' },
    { id: 'count3', count: 20, description: 'Cybersecurity Partners' }
  ];

  countUpOptions = {
    duration: 3
  };
  services = [
    {
      title: 'Managed Security Service Provider (MSSP)',
      description: 'Comprehensive security services outsourced to a third-party provider, including monitoring, threat detection, incident response, and management of security devices and systems.',
      image: 'firewall.png'
    },
    {
      title: 'Vulnerability Management',
      description: 'Process of identifying, prioritizing, and mitigating security vulnerabilities within a system or network to prevent potential breaches and minimize risk exposure.',
      image: 'vulnerability.png'
    },
    {
      title: 'Penetration Testing',
      description: 'Simulated cyber attacks to evaluate the security of a system or network, identifying vulnerabilities and weaknesses that could be exploited by malicious actors.',
      image: 'pentest.png'
    }
  ];
}

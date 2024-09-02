import { Component } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { RouterModule } from '@angular/router';

type ServiceDetails = {
  [key: string]: { title: string; description: string; link: string}[];
};

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
  selectedService: string = 'MSSP';

  services = [
    {
      id: 'MSSP',
      name: 'AreLea Comprehensive Vulnerability Management',
      description: 'Comprehensive security services outsourced to a third-party provider, including monitoring, threat detection, incident response, and management of security devices and systems.',
      icon: 'managed-cybersecurity.png'
    },
    {
      id: 'UAT',
      name: 'User Awareness Training',
      description: 'Ensuring governance, risk, and compliance...',
      icon: 'user-awareness.png'
    },
    {
      id: 'MSP',
      name: 'Outsourced IT Support',
      description: 'Securing and managing identities...',
      icon: 'managed-provider.png'
    },
    {
      id: 'FM',
      name: 'Firewall Management',
      description: 'Thorough assessment of your cybersecurity posture...',
      icon: 'firewall-management.png'
    },
    {
      id: 'PT',
      name: 'Penetration Testing',
      description: 'Securing applications from development through deployment...',
      icon: 'penetration-testing.png'
    },
    {
      id: 'NSO',
      name: 'Network Security & Optimization',
      description: 'Securing applications from development through deployment...',
      icon: 'network-security.png'
    },
    {
      id: 'VM',
      name: 'Vulnerability Management',
      description: 'Securing applications from development through deployment...',
      icon: 'vulnerability-management.png'
    }
  ];

  details: ServiceDetails = {
    IAM: [
      {
        title: 'User Activity Monitoring',
        description: 'Track employees\' activities on company devices and networks...',
        link: 'ma'
      },
      {
        title: 'Privileged Access Management',
        description: 'Advanced Privileged Access Management (PAM) solution...',
        link: 'ma'
      },
      {
        title: 'Third Party Risk Management',
        description: 'Offers a strategic approach to identifying, analysing, controlling...',
        link: 'ma'
      }
    ],
    MSSP: [
      {
        title: 'Firewall Assesments',
        description: 'Conduct regular Firewall Assessments to determine if your firewall is configured correctly and is effectively protecting your organisation from threats.',
        link: 'managed-security-service-provider'
      },
      {
        title: 'Penetration Tests',
        description: 'Tests to determine if our ethical hackers can enter your system undetected and launch a contained exploit. ',
        link: 'managed-security-service-provider'
      },
      {
        title: 'Vulnerability Assessments',
        description: 'Determines how many vulnerabilities your network and infrastructure have, how severe they are, and steps to remediate.',
        link: 'managed-security-service-provider'
      },
      {
        title: 'Application Assessments',
        description: 'Scan your web applications and APIs to expose vulnerabilities, determining severity and providing recommendations for remediation.',
        link: 'managed-security-service-provider'
      }
    ],
    UAT: [
      {
        title: 'User Awareness Training',
        description: 'Education and training programs aimed at increasing awareness and knowledge among employees about cybersecurity best practices, threats, and their role in maintaining a secure environment.',
        link: 'user-awareness-training'
      },
      {
        title: 'Importance of Training',
        description: 'User awareness training is essential to ensure employees understand potential threats and know how to respond to them, thereby reducing the risk of security breaches.',
        link: 'ma'
      },
      {
        title: 'Comprehensive Programs',
        description: 'Our programs cover various topics such as phishing, password security, and data protection, equipping employees with the necessary skills to maintain a secure environment.',
        link: 'ma'
      }
    ],
    MSP: [
      {
        title: 'Managed Service Provider (MSP)',
        description: 'Outsourced management and support of IT infrastructure and/or end-user systems, ensuring optimal performance, reliability, and security.',
        link: 'outsourced-it-support'
      },
      {
        title: 'Optimal Performance',
        description: 'Our MSP services ensure that your IT infrastructure and end-user systems are running at peak performance, with proactive monitoring and maintenance.',
        link: 'outsourced-it-support'
      },
      {
        title: 'Reliable Support',
        description: 'We provide comprehensive support to address any IT issues promptly, minimizing downtime and maintaining business continuity.',
        link: 'outsourced-it-support'
      }

    ],
    FM: [
      {
        title: 'Firewall Management',
        description: 'Configuration, monitoring, and maintenance of firewall devices to regulate incoming and outgoing network traffic, enforce security policies, and protect against unauthorized access and cyber threats.',
        link: 'firewall-management'
      },
      {
        title: 'Configuration',
        description: 'Our team ensures that your firewall devices are properly configured to meet your organization’s security needs, implementing robust security policies to safeguard your network.',
        link: 'firewall-management'
      },
      {
        title: 'Monitoring and Maintenance',
        description: 'We provide continuous monitoring and maintenance of your firewall devices, promptly addressing any issues to ensure optimal protection against cyber threats.',
        link: 'firewall-management'
      }

    ],
    PT: [
      {
        title: 'Penetration Testing',
        description: 'Simulated cyber attacks to evaluate the security of a system or network, identifying vulnerabilities and weaknesses that could be exploited by malicious actors.',
        link: 'penetration-testing'
      },
      {
        title: 'Vulnerability Identification',
        description: 'Through simulated attacks, we identify potential vulnerabilities and weaknesses within your system or network, providing a detailed assessment of your security posture.',
        link: 'penetration-testing'
      },
      {
        title: 'Security Evaluation',
        description: 'Our penetration testing services offer a comprehensive evaluation of your security measures, ensuring that your defenses are capable of withstanding real-world cyber threats.',
        link: 'penetration-testing'
      }

    ],
    NSO: [
      {
        title: 'Network Security & Optimization',
        description: 'Implementation of measures to protect the integrity, confidentiality, and availability of data transmitted over a network, while optimizing network performance and efficiency.',
        link: 'network-security-and-optimization'
      },
      {
        title: 'Data Integrity',
        description: 'We ensure that the data transmitted over your network remains intact and unaltered during transfer, protecting it from unauthorized access and corruption.',
        link: 'network-security-and-optimization'
      },
      {
        title: 'Performance Optimization',
        description: 'Our services focus on enhancing the efficiency and speed of your network, ensuring optimal performance and minimal downtime.',
        link: 'network-security-and-optimization'
      }

    ],
    VM: [
      {
        title: 'Vulnerability Management',
        description: 'Process of identifying, prioritizing, and mitigating security vulnerabilities within a system or network to prevent potential breaches and minimize risk exposure.',
        link: 'vulnerability-management'
      },
      {
        title: 'Identification and Assessment',
        description: 'We use advanced tools and techniques to identify vulnerabilities within your systems and network, assessing their potential impact on your security posture.',
        link: 'vulnerability-management'
      },
      {
        title: 'Mitigation Strategies',
        description: 'Our team develops and implements effective strategies to prioritize and mitigate identified vulnerabilities, reducing risk exposure and enhancing overall security.',
        link: 'vulnerability-management'
      }

    ]


  };

  selectService(serviceId: string) {
    this.selectedService = serviceId;
  }
}

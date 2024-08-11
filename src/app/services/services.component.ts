import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  selectedService: string = 'MSSP';

  services = [
    {
      id: 'MSSP',
      name: 'Managed Security Services',
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
      name: 'Managed Service Provider (MSP)',
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
        title: 'Monitoring',
        description: 'Comprehensive monitoring services that keep an eye on your network 24/7, identifying any unusual activities and ensuring that your systems are always protected.',
        link: 'managed-security-service-provider'
      },
      {
        title: 'Threat Detection',
        description: 'Advanced threat detection systems that quickly identify and respond to potential security threats, minimizing the risk of breaches and ensuring the safety of your data.',
        link: 'ma'
      },
      {
        title: 'Incident Response',
        description: 'Efficient incident response services that handle security incidents swiftly and effectively, minimizing downtime and reducing the impact on your business operations.',
        link: 'ma'
      },
      {
        title: 'Management of Security Devices and Systems',
        description: 'Expert management of your security devices and systems, ensuring that all components are functioning optimally and providing maximum protection for your network.',
        link: 'ma'
      }
    ],
    UAT: [
      {
        title: 'User Awareness Training',
        description: 'Education and training programs aimed at increasing awareness and knowledge among employees about cybersecurity best practices, threats, and their role in maintaining a secure environment.',
        link: 'ma'
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
        link: 'ma'
      },
      {
        title: 'Optimal Performance',
        description: 'Our MSP services ensure that your IT infrastructure and end-user systems are running at peak performance, with proactive monitoring and maintenance.',
        link: 'ma'
      },
      {
        title: 'Reliable Support',
        description: 'We provide comprehensive support to address any IT issues promptly, minimizing downtime and maintaining business continuity.',
        link: 'ma'
      }

    ],
    FM: [
      {
        title: 'Firewall Management',
        description: 'Configuration, monitoring, and maintenance of firewall devices to regulate incoming and outgoing network traffic, enforce security policies, and protect against unauthorized access and cyber threats.',
        link: 'ma'
      },
      {
        title: 'Configuration',
        description: 'Our team ensures that your firewall devices are properly configured to meet your organization’s security needs, implementing robust security policies to safeguard your network.',
        link: 'ma'
      },
      {
        title: 'Monitoring and Maintenance',
        description: 'We provide continuous monitoring and maintenance of your firewall devices, promptly addressing any issues to ensure optimal protection against cyber threats.',
        link: 'ma'
      }

    ],
    PT: [
      {
        title: 'Penetration Testing',
        description: 'Simulated cyber attacks to evaluate the security of a system or network, identifying vulnerabilities and weaknesses that could be exploited by malicious actors.',
        link: 'ma'
      },
      {
        title: 'Vulnerability Identification',
        description: 'Through simulated attacks, we identify potential vulnerabilities and weaknesses within your system or network, providing a detailed assessment of your security posture.',
        link: 'ma'
      },
      {
        title: 'Security Evaluation',
        description: 'Our penetration testing services offer a comprehensive evaluation of your security measures, ensuring that your defenses are capable of withstanding real-world cyber threats.',
        link: 'ma'
      }

    ],
    NSO: [
      {
        title: 'Network Security & Optimization',
        description: 'Implementation of measures to protect the integrity, confidentiality, and availability of data transmitted over a network, while optimizing network performance and efficiency.',
        link: 'ma'
      },
      {
        title: 'Data Integrity',
        description: 'We ensure that the data transmitted over your network remains intact and unaltered during transfer, protecting it from unauthorized access and corruption.',
        link: 'ma'
      },
      {
        title: 'Performance Optimization',
        description: 'Our services focus on enhancing the efficiency and speed of your network, ensuring optimal performance and minimal downtime.',
        link: 'ma'
      }

    ],
    VM: [
      {
        title: 'Vulnerability Management',
        description: 'Process of identifying, prioritizing, and mitigating security vulnerabilities within a system or network to prevent potential breaches and minimize risk exposure.',
        link: 'ma'
      },
      {
        title: 'Identification and Assessment',
        description: 'We use advanced tools and techniques to identify vulnerabilities within your systems and network, assessing their potential impact on your security posture.',
        link: 'ma'
      },
      {
        title: 'Mitigation Strategies',
        description: 'Our team develops and implements effective strategies to prioritize and mitigate identified vulnerabilities, reducing risk exposure and enhancing overall security.',
        link: 'ma'
      }

    ]


  };

  selectService(serviceId: string) {
    this.selectedService = serviceId;
  }
}

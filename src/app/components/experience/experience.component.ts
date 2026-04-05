import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="mb-16 animate-in" style="animation-delay: 0.1s">
      <h2 class="section-title dark:after:bg-primary-400 dark:text-white">Work Experience</h2>
      
      <div class="space-y-12">
        <div *ngFor="let exp of experiences" class="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-700 group">
          <!-- Timeline dot -->
          <div class="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-primary-500 border-4 border-white dark:border-slate-900 shadow-sm transition-transform duration-300 group-hover:scale-125"></div>
          
          <div class="glass-card hover-card p-6 dark:bg-slate-900/80 dark:border-slate-700/50">
            <div class="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
              <div>
                <h3 class="text-xl font-bold text-slate-900 dark:text-white">{{exp.role}}</h3>
                <p class="text-primary-600 dark:text-primary-400 font-medium">{{exp.company}}</p>
              </div>
              <div class="text-sm font-semibold px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full self-start">
                {{exp.period}}
              </div>
            </div>
            
            <p class="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              {{exp.description}}
            </p>
            
            <div class="flex flex-wrap gap-2">
              <span *ngFor="let tag of exp.tags" class="text-xs font-medium px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-default">
                {{tag}}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class ExperienceComponent {
  experiences = [
    {
      role: 'Frontend Web Developer',
      company: 'Circontrol S.A. · Viladecavalls',
      period: 'Mar 2023 – Present',
      description: 'Led full Angular migration from v12 to v20, modernising architecture. Designed and maintained an internal npm component library (PrimeNG + Angular Material). Built web applications from scratch, integrated Tailwind CSS v4, and collaborated with UX/UI via Figma for pixel-perfect implementation.',
      tags: ['Angular v20', 'PrimeNG', 'Material', 'Tailwind v4', 'Figma', 'Architecture']
    },
    {
      role: 'Full Stack Lead Developer',
      company: 'Welme App · Barcelona',
      period: 'Mar 2022 – Feb 2023',
      description: 'Founding team member and technical lead. Developed full stack with React.js, PostgreSQL and AWS (EC2, S3). Built REST API with TypeScript following TDD methodology (Jest, Supertest). Integrated Solidity smart contracts and Web3 tooling.',
      tags: ['React.js', 'PostgreSQL', 'AWS', 'TypeScript', 'TDD', 'Solidity', 'Web3']
    },
    {
      role: 'FullStack / Web3 Developer',
      company: 'Freelance – Zodiac Blockchain · Lleida',
      period: 'Sep 2021 – Mar 2022',
      description: 'Delivered end-to-end fullstack projects. Developed React.js applications, Solidity smart contracts, Wagmi and Viem integrations for Web3 platforms.',
      tags: ['React.js', 'Solidity', 'Wagmi', 'Viem', 'Web3', 'UI Design']
    },
    {
      role: 'Full Stack Developer & BackOffice',
      company: 'MPM Software S.L. · Igualada',
      period: 'Sep 2020 – Aug 2021',
      description: 'Developed brokerage management web applications with .NET (C#) and SQL Server. Set up and managed production environments on AWS and local servers.',
      tags: ['.NET C#', 'SQL Server', 'AWS', 'BackOffice']
    }
  ];
}

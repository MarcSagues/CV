import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="mb-16 animate-in" style="animation-delay: 0.2s">
      <h2 class="section-title dark:after:bg-primary-400 dark:text-white">Technical Expertise</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 isolate">
        <!-- Iterate through simplified categories -->
        <div *ngFor="let category of filteredCategories"
             class="glass-card hover-card p-6 min-w-[280px] relative transition-all duration-300 hover:z-10 hover:scale-[1.03] cursor-default bg-white dark:bg-zinc-900 shadow-2xl dark:shadow-black">
          <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full" [ngClass]="category.color"></span>
            {{category.name}}
          </h3>

          <div class="space-y-6">
            <div *ngFor="let skill of category.skills" class="group">
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{{skill.name}}</span>
                <span class="text-xs font-bold text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-400 transition-colors">{{skill.level}}%</span>
              </div>
              <!-- Skill bar -->
              <div class="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div class="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full transition-all duration-1000 ease-out shadow-sm" [style.width.%]="skill.level"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Certifications & Badges: independent, full-width row (images only, clickable) -->
      <div class="glass-card hover-card p-6 mt-6 relative transition-all duration-300 bg-white dark:bg-zinc-900 shadow-2xl dark:shadow-black">
        <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-yellow-500"></span>
          Certifications & Badges
        </h3>
        <div class="flex items-center gap-4 flex-wrap">
          <a *ngFor="let badge of badges" [href]="badge.url" target="_blank" rel="noopener noreferrer"
             [attr.aria-label]="badge.name" [title]="badge.name"
             class="block w-16 h-16 overflow-hidden rounded-lg drop-shadow-md transition-transform duration-300 hover:scale-110">
            <img [src]="badge.image" [alt]="badge.name" class="w-full h-full object-cover scale-[1.18]">
          </a>
        </div>
      </div>

      <!-- Languages Card -->
      <div class="glass-card hover-card p-6 mt-6 relative transition-all duration-300 bg-white dark:bg-zinc-900 shadow-2xl dark:shadow-black">
        <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-green-500"></span>
          Languages
        </h3>
        <div class="space-y-4">
          <div class="flex justify-between items-center bg-slate-50 dark:bg-zinc-800/50 p-3 rounded-lg border border-slate-100 dark:border-zinc-700 transition-all duration-300 hover:bg-white dark:hover:bg-zinc-800 hover:shadow-md hover:border-green-200 dark:hover:border-green-900 group">
            <span class="text-sm font-medium text-slate-700 dark:text-slate-300">Spanish</span>
            <span class="text-xs font-bold text-green-600 dark:text-green-400 px-2 py-1 bg-green-50 dark:bg-green-900/30 rounded-full group-hover:bg-green-100 dark:group-hover:bg-green-900/50 transition-colors">Native</span>
          </div>
          <div class="flex justify-between items-center bg-slate-50 dark:bg-zinc-800/50 p-3 rounded-lg border border-slate-100 dark:border-zinc-700 transition-all duration-300 hover:bg-white dark:hover:bg-zinc-800 hover:shadow-md hover:border-green-200 dark:hover:border-green-900 group">
            <span class="text-sm font-medium text-slate-700 dark:text-slate-300">Catalan</span>
            <span class="text-xs font-bold text-green-600 dark:text-green-400 px-2 py-1 bg-green-50 dark:bg-green-900/30 rounded-full group-hover:bg-green-100 dark:group-hover:bg-green-900/50 transition-colors">Native</span>
          </div>
          <div class="flex justify-between items-center bg-slate-50 dark:bg-zinc-800/50 p-3 rounded-lg border border-slate-100 dark:border-zinc-700 transition-all duration-300 hover:bg-white dark:hover:bg-zinc-800 hover:shadow-md hover:border-primary-200 dark:hover:border-primary-900 group">
            <span class="text-sm font-medium text-slate-700 dark:text-slate-300">English</span>
            <span class="text-xs font-bold text-primary-600 dark:text-primary-400 px-2 py-1 bg-primary-50 dark:bg-primary-900/30 rounded-full group-hover:bg-primary-100 dark:group-hover:bg-primary-900/50 transition-colors">Professional</span>
          </div>
          <div class="flex justify-between items-center bg-slate-50 dark:bg-zinc-800/50 p-3 rounded-lg border border-slate-100 dark:border-zinc-700 transition-all duration-300 hover:bg-white dark:hover:bg-zinc-800 hover:shadow-md hover:border-slate-300 dark:hover:border-slate-600 group">
            <span class="text-sm font-medium text-slate-700 dark:text-slate-300">French</span>
            <span class="text-xs font-bold text-slate-500 dark:text-slate-400 px-2 py-1 bg-slate-100 dark:bg-slate-700/40 rounded-full group-hover:bg-slate-200 dark:group-hover:bg-slate-700/60 transition-colors">Basic</span>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; }
    .isolate { isolation: isolate; }
  `]
})
export class SkillsComponent {
  filteredCategories = [
    {
      name: 'Software Architecture',
      color: 'bg-primary-500',
      skills: [
        { name: 'Microservices & System Design', level: 92 },
        { name: 'TypeScript / Node.js', level: 92 },
        { name: 'Scalable Backend (PostgreSQL)', level: 88 },
        { name: 'Technical Mentorship & Code Review', level: 88 }
      ]
    },
    {
      name: 'Web3 & Blockchain',
      color: 'bg-accent-500',
      skills: [
        { name: 'Smart Contracts (Mainnet Deployments)', level: 88 },
        { name: 'Multi-Wallet Integration (MetaMask, WalletConnect)', level: 85 },
        { name: 'Layer 2 (Arbitrum / Optimism / zkSync)', level: 78 },
        { name: 'Wagmi / Viem / Ethers', level: 85 }
      ]
    },
    {
      name: 'Cloud & DevOps',
      color: 'bg-orange-500',
      skills: [
        { name: 'Kubernetes (Production)', level: 78 },
        { name: 'Infrastructure as Code (Terraform)', level: 75 },
        { name: 'CI/CD Pipelines', level: 90 },
        { name: 'Team Leadership', level: 85 }
      ]
    }
  ];

  badges = [
    {
      name: 'JavaScript Essentials 1',
      issuer: 'Cisco · OpenEDG JS Institute',
      url: 'https://www.credly.com/badges/0437252c-6b02-429a-9915-f47a92fb8477',
      image: 'https://images.credly.com/images/b93bf373-3da6-4ada-9879-a0c39d6a11f8/linkedin_thumb_image.png'
    },
    {
      name: 'Introduction to Modern AI',
      issuer: 'Cisco',
      url: 'https://www.credly.com/badges/6845220d-223f-4671-8bc8-1249ffe3a4aa',
      image: 'https://images.credly.com/images/e2d12302-10f9-40d4-8ff1-066a7008b61d/linkedin_thumb_blob'
    }
  ];
}

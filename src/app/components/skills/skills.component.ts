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
             class="glass-card hover-card p-6 min-w-[280px] relative transition-all duration-300 hover:z-10 hover:scale-[1.03] cursor-default bg-white dark:bg-slate-900 shadow-2xl dark:shadow-black">
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

        <!-- Languages Card -->
        <div class="glass-card hover-card p-6 min-w-[280px] relative transition-all duration-300 hover:z-10 hover:scale-[1.03] cursor-default bg-white dark:bg-slate-900 shadow-2xl dark:shadow-black">
          <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-green-500"></span>
            Languages
          </h3>
          <div class="space-y-4">
            <div class="flex justify-between items-center bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border border-slate-100 dark:border-slate-700 transition-all duration-300 hover:bg-white dark:hover:bg-slate-800 hover:shadow-md hover:border-green-200 dark:hover:border-green-900 group">
              <span class="text-sm font-medium text-slate-700 dark:text-slate-300">Spanish</span>
              <span class="text-xs font-bold text-green-600 dark:text-green-400 px-2 py-1 bg-green-50 dark:bg-green-900/30 rounded-full group-hover:bg-green-100 dark:group-hover:bg-green-900/50 transition-colors">Native</span>
            </div>
            <div class="flex justify-between items-center bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border border-slate-100 dark:border-slate-700 transition-all duration-300 hover:bg-white dark:hover:bg-slate-800 hover:shadow-md hover:border-green-200 dark:hover:border-green-900 group">
              <span class="text-sm font-medium text-slate-700 dark:text-slate-300">Catalan</span>
              <span class="text-xs font-bold text-green-600 dark:text-green-400 px-2 py-1 bg-green-50 dark:bg-green-900/30 rounded-full group-hover:bg-green-100 dark:group-hover:bg-green-900/50 transition-colors">Native</span>
            </div>
            <div class="flex justify-between items-center bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border border-slate-100 dark:border-slate-700 transition-all duration-300 hover:bg-white dark:hover:bg-slate-800 hover:shadow-md hover:border-primary-200 dark:hover:border-primary-900 group">
              <span class="text-sm font-medium text-slate-700 dark:text-slate-300">English</span>
              <span class="text-xs font-bold text-primary-600 dark:text-primary-400 px-2 py-1 bg-primary-50 dark:bg-primary-900/30 rounded-full group-hover:bg-primary-100 dark:group-hover:bg-primary-900/50 transition-colors">Upper-Int</span>
            </div>
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
      name: 'Frontend Ecosystem',
      color: 'bg-primary-500',
      skills: [
        { name: 'Angular (v12-v20)', level: 98 },
        { name: 'React.js', level: 90 },
        { name: 'Tailwind CSS v4', level: 95 },
        { name: 'PrimeNG / Angular Material', level: 95 }
      ]
    },
    {
      name: 'Web3 & Blockchain',
      color: 'bg-accent-500',
      skills: [
        { name: 'Solidity / Smart Contracts', level: 85 },
        { name: 'Wagmi / Viem / Ethers', level: 85 },
        { name: 'Blockchain Architecture', level: 88 },
        { name: 'Web3 Tooling', level: 82 }
      ]
    },
    {
      name: 'Back & Architecture',
      color: 'bg-slate-400',
      skills: [
        { name: 'Node.js / TypeScript', level: 92 },
        { name: 'AWS (EC2, S3)', level: 85 },
        { name: 'PostgreSQL / SQL Server', level: 88 },
        { name: 'TDD (Jest / Supertest)', level: 90 }
      ]
    }
  ];
}

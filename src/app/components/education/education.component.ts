import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="mb-16 animate-in" style="animation-delay: 0.15s">
      <h2 class="section-title dark:after:bg-primary-400 dark:text-white">Education & Certifications</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div *ngFor="let edu of education" class="glass-card hover-card p-6 border-l-4 border-accent-400 dark:bg-zinc-900/80 dark:border-zinc-700/50">
          <div class="flex justify-between items-start mb-2">
            <h3 class="text-lg font-bold text-slate-900 dark:text-white flex-1">{{edu.degree}}</h3>
            <span class="text-xs font-bold text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md whitespace-nowrap">{{edu.year}}</span>
          </div>
          <p class="text-primary-600 dark:text-primary-400 font-medium mb-2">{{edu.school}}</p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class EducationComponent {
  education = [
    {
      degree: 'MSc Blockchain Technologies',
      school: 'UPC, Barcelona',
      year: '2022–23'
    },
    {
      degree: 'Degree in Digital Interaction & Computation',
      school: 'Univ. de Lleida',
      year: '2018–21'
    }
  ];
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  template: `
    <section class="mb-16 animate-in" style="animation-delay: 0.15s">
      <h2 class="section-title dark:after:bg-primary-400 dark:text-white">Projects</h2>

      <div class="grid grid-cols-1 gap-6">
        @for (project of projects; track project.url) {
          <article class="glass-card hover-card p-6 dark:bg-zinc-900/80 dark:border-zinc-700/50">
            <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div>
                <h3 class="text-xl font-bold text-slate-900 dark:text-white">{{ project.name }}</h3>
                <p class="mt-2 text-slate-600 dark:text-slate-300 leading-relaxed">{{ project.description }}</p>
                <div class="mt-4 flex flex-wrap gap-2">
                  @for (tech of project.technologies; track tech) {
                    <span class="text-xs font-medium px-2 py-1 rounded-md bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-zinc-700">
                      {{ tech }}
                    </span>
                  }
                </div>
              </div>

              <a
                class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-primary-200 dark:border-primary-800 text-primary-700 dark:text-primary-300 bg-primary-50/70 dark:bg-primary-900/20 hover:bg-primary-100 dark:hover:bg-primary-900/35 hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-200 self-start text-sm font-semibold"
                [href]="project.url"
                target="_blank"
                rel="noopener noreferrer"
                [attr.aria-label]="'Open project ' + project.name"
              >
                Visit
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        }
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class ProjectsComponent {
  projects = [
    {
      name: 'DEX',
      description: 'Decentralized exchange project focused on Web3 user experience and fast swaps.',
      url: 'https://dex.msagues.com',
      technologies: ['React', 'Solidity', 'TypeScript', 'Tailwind', 'Web3', 'Ethers']
    }
  ];
}

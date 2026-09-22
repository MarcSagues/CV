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
              <div class="flex gap-4">
                @if (project.image) {
                  <img [src]="project.image" [alt]="project.name" class="w-14 h-14 rounded-xl object-cover shadow-md flex-shrink-0">
                }
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

                  @if (project.stores) {
                    <div class="mt-4 flex flex-wrap gap-2">
                      <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-slate-200 dark:border-zinc-700 text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-zinc-800/50 text-xs font-semibold cursor-default" title="Coming soon">
                        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.9 0 2.28-1.01 3.83-1.01.6 0 2.75.05 4.16 2.09-.108.07-2.48 1.43-2.48 4.39 0 3.51 3.08 4.75 3.336 4.35z"/></svg>
                        App Store · Coming soon
                      </span>
                      <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-slate-200 dark:border-zinc-700 text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-zinc-800/50 text-xs font-semibold cursor-default" title="Coming soon">
                        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M3.61 1.81c-.31.32-.5.81-.5 1.44v17.5c0 .63.19 1.12.5 1.44l.11.1L13.9 12.1v-.2L3.72 1.71l-.11.1z"/><path d="M17.28 15.47l-3.38-3.37v-.2l3.38-3.37 3.83 2.18c1.09.62 1.09 1.63 0 2.25l-3.83 2.51z"/><path d="M13.9 12.1l3.38 3.37-11.56 6.58c-.42.25-.9.24-1.24-.02l9.42-9.93z"/><path d="M13.9 11.9L4.48 1.97c.34-.26.82-.27 1.24-.02l11.56 6.58-3.38 3.37z"/></svg>
                        Google Play · Coming soon
                      </span>
                    </div>
                  }
                </div>
              </div>

              <a
                class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-primary-200 dark:border-primary-800 text-primary-700 dark:text-primary-300 bg-primary-50/70 dark:bg-primary-900/20 hover:bg-primary-100 dark:hover:bg-primary-900/35 hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-200 self-start text-sm font-semibold whitespace-nowrap"
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
      name: 'Piqo — Weekly Football Pool App',
      description: 'Production mobile app (iOS & Android, via Capacitor) for weekly football prediction pools among groups of friends: matchdays, groups, leaderboards, streaks, badges and push notifications. The link below opens the companion website — the actual product is the native app. Built end-to-end: NestJS + Prisma + PostgreSQL backend, Angular + Capacitor frontend.',
      url: 'https://piqo.es',
      image: 'projects/piqo-icon.png',
      technologies: ['Angular', 'Capacitor', 'NestJS', 'Prisma', 'PostgreSQL', 'iOS / Android', 'PWA'],
      stores: true
    },
    {
      name: 'DEX',
      description: 'Decentralized exchange project focused on Web3 user experience and fast swaps.',
      url: 'https://dex.msagues.com',
      technologies: ['React', 'Solidity', 'TypeScript', 'Tailwind', 'Web3', 'Ethers']
    }
  ];
}

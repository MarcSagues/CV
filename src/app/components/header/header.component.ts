import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="relative py-12 px-8 mb-12 glass-card hover-card animate-in overflow-hidden dark:bg-zinc-900/80 dark:border-zinc-700/50">
      <!-- Decorative background elements -->
      <div class="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary-100 dark:bg-primary-900/15 rounded-full blur-3xl opacity-50"></div>
      <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-accent-100 dark:bg-accent-900/15 rounded-full blur-3xl opacity-50"></div>
      
      <div class="relative flex flex-col md:flex-row items-center gap-8">
        <div class="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-2xl group">
          <img 
            src="profile.jpg" 
            alt="Marc Sagués" 
            class="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
            onerror="this.style.display='none'"
          >
          <div class="absolute inset-0 bg-gradient-to-br from-primary-400/5 to-accent-400/5 pointer-events-none"></div>
        </div>
        
        <div class="flex-1 text-center md:text-left">
          <h1 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2">Marc Sagués</h1>
          <p class="text-xl md:text-2xl font-medium text-primary-600 dark:text-primary-400 mb-4 font-display">Frontend & Web3 Developer</p>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto md:mx-0">
            <a href="mailto:marc10sagues@gmail.com" class="flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-full text-sm border border-transparent hover:border-primary-200 dark:hover:border-primary-800 hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
              <svg class="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              <span class="truncate">marc10sagues&#64;gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/marc-sagues/" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-full text-sm border border-transparent hover:border-primary-200 dark:hover:border-primary-800 hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
              <svg class="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              <span class="truncate">linkedin.com/marc-sagues</span>
            </a>
            <a href="https://github.com/MarcSagues" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-full text-sm border border-transparent hover:border-primary-200 dark:hover:border-primary-800 hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
               <svg class="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.607.069-.607 1.004.07 1.532 1.03 1.532 1.03.891 1.527 2.338 1.086 2.908.831.091-.645.348-1.086.634-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
              <span class="truncate">github.com/MarcSagues</span>
            </a>
          </div>
        </div>

        <div class="flex flex-col gap-3">
          <button (click)="themeService.toggleTheme()" class="glass-button bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center gap-2 hover:bg-slate-200 dark:hover:bg-slate-700">
            <ng-container *ngIf="!themeService.isDarkMode()">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
              <span>Dark</span>
            </ng-container>
            <ng-container *ngIf="themeService.isDarkMode()">
              <svg class="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
              <span>Light</span>
            </ng-container>
          </button>
          
          <button (click)="onExport.emit()" class="glass-button-primary flex items-center gap-2 group whitespace-nowrap">
            <svg class="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
            Export to PDF
          </button>
        </div>
      </div>
    </header>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class HeaderComponent {
  @Output() onExport = new EventEmitter<void>();
  themeService = inject(ThemeService);
}

import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="relative py-12 px-8 mb-12 glass-card hover-card animate-in overflow-hidden dark:bg-slate-900/80 dark:border-slate-700/50">
      <!-- Decorative background elements -->
      <div class="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary-100 dark:bg-primary-900/20 rounded-full blur-3xl opacity-50"></div>
      <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-accent-100 dark:bg-accent-900/20 rounded-full blur-3xl opacity-50"></div>
      
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
          
          <div class="flex flex-wrap justify-center md:justify-start gap-4 text-slate-600 dark:text-slate-400">
            <span class="flex items-center gap-2 px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              marc10sagues&#64;gmail.com
            </span>
            <span class="flex items-center gap-2 px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"/></svg>
              linkedin.com/marc-sagues
            </span>
            <span class="flex items-center gap-2 px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm">
               <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.607.069-.607 1.004.07 1.532 1.03 1.532 1.03.891 1.527 2.338 1.086 2.908.831.091-.645.348-1.086.634-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
              github.com/MarcSagues
            </span>
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

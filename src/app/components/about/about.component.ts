import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="mb-16 animate-in" style="animation-delay: 0.05s">
      <h2 class="section-title dark:after:bg-primary-400 dark:text-white">Professional Profile</h2>
      
      <div class="glass-card hover-card p-8 relative overflow-hidden bg-gradient-to-br from-white/90 to-primary-50/10 dark:from-slate-900/90 dark:to-slate-950 transition-colors duration-300">
        <!-- Floating quote icon -->
        <svg class="absolute top-4 right-8 w-16 h-16 text-primary-100 dark:text-primary-900/20 opacity-50" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017C10.4647 13 10.017 12.5523 10.017 12V9C10.017 7.89543 10.9124 7 12.017 7H19.017C20.1216 7 21.017 7.89543 21.017 9V15C21.017 17.2091 19.2261 19 17.017 19H14.017C13.4647 19 13.017 18.5523 13.017 18V21L14.017 21ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.017C5.46472 8 5.017 8.44772 5.017 9V12C5.017 12.5523 4.56929 13 4.017 13H2.017C1.46472 13 1.017 12.5523 1.017 12V9C1.017 7.89543 1.91243 7 3.017 7H10.017C11.1216 7 12.017 7.89543 12.017 9V15C12.017 17.2091 10.2261 19 8.017 19H5.017C4.46472 19 4.017 18.5523 4.017 18V21L5.017 21Z"/></svg>
        
        <p class="text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
          Frontend developer with 5+ years of experience building scalable web applications with Angular and React. Specialised in component architecture, major version migration, UI design systems and internal library development. Passionate about code quality, performance and delivering great user experiences.
        </p>
        
        <div class="mt-8 flex flex-wrap gap-8">
          <div class="flex items-center gap-3 group">
            <div class="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50">
               <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            </div>
            <div>
              <div class="text-2xl font-bold text-slate-900 dark:text-white border-none transition-colors duration-300 group-hover:text-primary-600 dark:group-hover:text-primary-400">5+ Years</div>
              <div class="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-widest font-bold">Experience</div>
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
export class AboutComponent {
  themeService = inject(ThemeService);
}

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './components/education/education.component';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    AboutComponent,
    ExperienceComponent,
    SkillsComponent,
    EducationComponent
  ],
  template: `
    <div class="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div id="cv-content" class="max-w-5xl mx-auto">
        <!-- Main CV Layout -->
        <app-header (onExport)="exportCV()"></app-header>
        
        <main class="grid grid-cols-1 gap-8">
          <app-about></app-about>
          
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div class="lg:col-span-2">
              <app-experience></app-experience>
              <app-education></app-education>
            </div>
            
            <div class="lg:col-span-1">
              <app-skills></app-skills>
              
              <div class="glass-card hover-card p-6 mt-8 animate-in dark:bg-slate-900/80 dark:border-slate-700/50" style="animation-delay: 0.4s">
                <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-4">Availability</h3>
                <div class="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <span class="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
                  Open to new opportunities
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <footer class="mt-16 text-center text-slate-400 dark:text-slate-600 text-sm">
          <p>© 2026 Marc Sagués. All rights reserved.</p>
        </footer>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class AppComponent {
  themeService = inject(ThemeService);

  exportCV() {
    const link = document.createElement('a');
    link.href = 'cv/CV_MarcSagues_2026.pdf';
    link.download = 'CV_MarcSagues_2026.pdf';
    link.click();
  }
}

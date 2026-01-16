import { BackgroundComponent } from './background/background';
import { Component } from '@angular/core';


import { HeroComponent } from './components/hero/hero';
import { AboutComponent } from './components/about/about';
import { SkillsComponent } from './components/skills/skills';
import { ExperienceComponent } from './components/experience/experience';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';
import { NavbarComponent } from './components/navbar/navbar';
import { ProjectsComponent } from './components/project/project';
import { AutoRevealDirective } from './animations/auto-reveal.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ContactComponent,
    FooterComponent,
    NavbarComponent,
    ProjectsComponent,
    AutoRevealDirective,
    BackgroundComponent
  ],
  templateUrl: './app.html',
})
export class AppComponent {}

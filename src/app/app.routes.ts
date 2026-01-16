import { Routes } from '@angular/router';

import { HeroComponent } from './components/hero/hero';
import { AboutComponent } from './components/about/about';
import { SkillsComponent } from './components/skills/skills';
import { ExperienceComponent } from './components/experience/experience';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';
import { NavbarComponent } from './components/navbar/navbar';
import { ProjectsComponent } from './components/project/project';
import { BackgroundComponent } from './background/background';

export const routes: Routes = [
	{ path: '', component: HeroComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'skills', component: SkillsComponent },
	{ path: 'projects', component: ProjectsComponent },
	{ path: 'experience', component: ExperienceComponent },
	{ path: 'contact', component: ContactComponent },
	{ path: 'background', component: BackgroundComponent },
	{ path: 'footer', component: FooterComponent },
	{ path: 'navbar', component: NavbarComponent }
];

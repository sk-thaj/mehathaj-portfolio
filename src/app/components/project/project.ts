import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../animations/reveal.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './project.html',
  styleUrls: ['./project.css']
})
export class ProjectsComponent {

  projects = [
    {
      title: 'India Explorer',
      description:
        "A comprehensive travel platform showcasing India's diverse destinations with interactive maps and detailed guides.",
      gradient: 'blue',
      image: 'indiaEx.png',
      tech: ['React', 'TypeScript', 'Tailwind Css', 'MySQL']
    },
    {
      title: 'Portfolio Website',
      description:
        'A modern, responsive portfolio website built with cutting-edge technologies and stunning animations.',
      gradient: 'purple',
      image: 'portfolio.png',
      tech: ['React', 'TypeScript', 'Tailwind Css']
    },
    {
      title: 'Python Quiz Game',
      description:
        'An interactive quiz game with multiple categories, scoring system, and engaging user experience.',
      gradient: 'teal',
      image:'pythonQuiz.jpeg',
      tech: ['Python']
    }
  ];
}

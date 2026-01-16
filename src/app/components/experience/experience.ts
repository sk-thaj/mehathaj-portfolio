import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../animations/reveal.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './experience.html',
  styleUrls: ['./experience.css']
})
export class ExperienceComponent {

  experiences = [
    {
      company: 'SURE Trust',
      role: 'Full Stack Intern',
      period: '2025 - Present',
      description:
        'Building end-to-end web applications using React, Node.js, and MySQL.'
    },
    {
      company: 'MITS',
      role: 'Front-End Intern',
      period: '2025',
      description:
        'Developed responsive user interfaces and enhanced user experience.'
    },
    {
      company: 'YBI Foundation',
      role: 'Python Intern',
      period: '2025',
      description:
        'Created automation tools and data analysis scripts using Python.'
    }
  ];

  certifications = ['PwC', 'TATA', 'IBM', 'Coursera', 'Microsoft'];
}

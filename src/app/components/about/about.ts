import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../animations/reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class AboutComponent {
  cards = [
    {
      title: 'Development',
      description:
        'Building scalable web applications with modern technologies and best practices.',
      icon: '<>'
    },
    {
      title: 'Design',
      description:
        'Creating beautiful, user-friendly interfaces that provide exceptional user experiences.',
      icon: '🎨'
    },
    {
      title: 'Innovation',
      description:
        "Always exploring new technologies and pushing the boundaries of what's possible.",
      icon: '🌐'
    },
  ];
}

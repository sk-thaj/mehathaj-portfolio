import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-background',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './background.html',
  styleUrls: ['./background.css']
})
export class BackgroundComponent {
  dots = Array.from({ length: 60 });
}

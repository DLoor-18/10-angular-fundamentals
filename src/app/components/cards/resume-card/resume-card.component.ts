import { Component, input } from '@angular/core';

@Component({
  selector: 'app-resume-card',
  imports: [],
  templateUrl: './resume-card.component.html',
  styleUrl: './resume-card.component.scss'
})
export class ResumeCardComponent {
  data = input<any>();
}

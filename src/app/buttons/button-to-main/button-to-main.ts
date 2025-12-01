import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-button-to-main',
  standalone: true,
  imports: [ButtonModule, RouterLink],
  templateUrl: './button-to-main.html',
  styleUrl: './button-to-main.scss',
})
export class ButtonToMain {

}

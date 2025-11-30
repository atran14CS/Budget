import { Component } from '@angular/core';
import { ButtonToMain } from './buttons/button-to-main'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonToMain],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

}

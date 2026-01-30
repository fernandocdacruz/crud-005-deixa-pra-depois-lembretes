import { Component } from '@angular/core';
import { MATERIAL_IMPORTS } from '../../../shared/material/material.imports';

@Component({
  standalone: true,
  selector: 'app-navbar',
  imports: [ ...MATERIAL_IMPORTS ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}

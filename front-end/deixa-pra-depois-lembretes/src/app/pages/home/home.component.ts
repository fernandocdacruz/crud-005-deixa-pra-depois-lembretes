import { Component } from '@angular/core';
import { MATERIAL_IMPORTS } from '../../shared/material/material.imports';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [ ...MATERIAL_IMPORTS ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

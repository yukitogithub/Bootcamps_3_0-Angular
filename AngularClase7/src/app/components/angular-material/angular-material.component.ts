import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-angular-material',
  standalone: true,
  imports: [
    MatCardModule, MatButtonModule, MatSlideToggleModule
  ],
  templateUrl: './angular-material.component.html',
  styleUrl: './angular-material.component.css'
})
export class AngularMaterialComponent {

}

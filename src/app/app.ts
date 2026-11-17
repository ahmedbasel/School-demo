import { Component } from '@angular/core';
import { SchoolHeaderComponent } from './components/school-header.component';
import { SchoolHeroComponent } from './components/school-hero.component';
import { SchoolContentComponent } from './components/school-content.component';
import { SchoolFooterComponent } from './components/school-footer.component';

@Component({
  selector: 'app-root',
  imports: [SchoolHeaderComponent, SchoolHeroComponent, SchoolContentComponent, SchoolFooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}

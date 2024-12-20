import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: "./app.component.html",
  imports: [
    RouterOutlet,
    RouterLink,
    HeaderComponent,
    FooterComponent
  ],
  styleUrls: ['./app.component.scss']
})
export class AppComponent { }
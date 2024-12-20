import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ButtonComponent,
    RouterOutlet,
    CommonModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  showAddTask: boolean;
  title: string = "Task Tracker"
  subscription: Subscription;

  constructor(private uiService: UiService, private router: Router) {
      this.subscription = uiService.onToggle().subscribe((value) => {
      this.showAddTask = value;
    })
  }
  toggleAddTask() {
    this.uiService.toggleAddTask();
  }

  hasRoute(url:string){
    return this.router.url===url;
  }
}

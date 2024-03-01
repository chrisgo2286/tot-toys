import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tot-toys';
  
  navToToyOverview(): void {
    const searchInput = <HTMLInputElement>document.getElementById("search");
    const searchText = (searchInput) ? searchInput.value: null; 
    const url = this.router.url;
    
    if(url.includes('toyOverview')) {
      this.router.navigate(
        ['/']
      ) .then(() => {
        this.router.navigate(
          ['/', 'toyOverview'],
          { queryParams: { search: searchText }}
        )
      })
    } else {
      this.router.navigate(
        ['/', 'toyOverview'],
        { queryParams: { search: searchText }}
      )
    }
  }

  constructor ( private router: Router ) {}
}

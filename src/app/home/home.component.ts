import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToyListService } from '../toy-list.service';
import { Toy } from '../toy';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  toyList: Toy[] = [];
  toyListService: ToyListService = inject(ToyListService);

  navToToyOverview(): void {
    this.router.navigate(['/', 'toyOverview'])
  }

  constructor( private router: Router) {
    this.toyListService.fetchToys(null)
    .then((toyList: Toy[]) => {
      this.toyList = toyList;
    this.toyList = this.toyList.slice(0,4);
    })
  }
}

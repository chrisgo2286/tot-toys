import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Toy } from '../toy';
import { ToyListService } from '../toy-list.service';

@Component({
  selector: 'app-toy-overview',
  standalone: true,
  imports: [ CommonModule, RouterLink ],
  templateUrl: './toy-overview.component.html',
  styleUrl: './toy-overview.component.css'
})
export class ToyOverviewComponent {
  toyList: Toy[] = [];
  toyListService: ToyListService = inject(ToyListService);
  
  constructor() {
    const url = new URL(window.location.href);
    const searchText = url.searchParams.get("search");
    this.toyListService.fetchToys(searchText)
    .then((toyList: Toy[]) => {
      this.toyList = toyList;
    })
  }
}

import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ToyListService } from '../toy-list.service';

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './support.component.html',
  styleUrl: './support.component.css'
})
export class SupportComponent {
  toyListService = inject(ToyListService)

  applyForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    request: new FormControl('')
  })

  submitSupportRequest() {
    this.toyListService.submitSupportRequest(
      this.applyForm.value.name ?? '',
      this.applyForm.value.email ?? '',
      this.applyForm.value.request ?? ''
    )
  }
}

import { Injectable } from '@angular/core';
import { Toy } from './toy';

@Injectable({
  providedIn: 'root'
})
export class ToyListService {

  url = 'http://localhost:8000/tot-toys/toys/';
  urlWithParams = 'http://localhost:8000/tot-toys/toys';

  async fetchToys(search: string | null): Promise<Toy[]> {
    const url = (search) ? this.urlWithParams + "?search=" + search: this.url; 
    const data = await fetch(url)
    return await data.json() ?? [];
  }

  async fetchToyById(id: Number): Promise<Toy | undefined> {
    const data = await fetch(this.url + id + '/')
    return await data.json() ?? {};
  }

  submitSupportRequest(name: String, email: String, request: String) {
    console.log(`Support request received! Name: ${name} E-Mail: ${email} Request: ${request}`)
  }
  constructor() { 
  }    
}
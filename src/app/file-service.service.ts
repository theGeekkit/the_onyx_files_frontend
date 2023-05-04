import { Injectable } from '@angular/core';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class FileServiceService {

  searchTerm: string = '';

  private searchTerms = new Subject<string>();

  constructor(private http: HttpClient) {}

  search(searchTerm: string) {
    console.log(searchTerm);

    return this.http.post('http://localhost:3000/items/search', { term: searchTerm });
  }
}

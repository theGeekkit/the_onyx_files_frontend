import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
    <h2>Menu</h2>
    <ul>
      <li><a routerLink="/">About Us</a></li>
      <li><a routerLink="/login">Log In</a></li>
      <li><a routerLink="/recent">Recent Article</a></li>
    </ul>
  `,
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.css']
})
export class HeaderNavbarComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openMenu() {
    const dialogRef = this.dialog.open(MenuComponent,{
      width: '250px'
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MenuComponent } from '../menu/menu.component';
import { FileServiceService } from '../file-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.css']
})
export class HeaderNavbarComponent implements OnInit {

  constructor(private dialog: MatDialog, private fService: FileServiceService) { }

  ngOnInit(): void {
  }
  openMenu() {
    this.dialog.open(MenuComponent,{
      width: '30%'
    });
  }
  search(form: NgForm) {
    if (form.value.search) {
      this.fService.search(form.value.search).subscribe(res => {
        console.log(res);

      })
    }
  }
}

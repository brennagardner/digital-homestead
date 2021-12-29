import { Component, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavService } from '../services/sidenav.service';

@Component({
  selector: 'app-sidenav-component',
  templateUrl: './sidenav-component.component.html',
  styleUrls: ['./sidenav-component.component.scss']
})
export class SidenavComponent {

public isShowing: boolean = true;

  public constructor(private sidenavService: SidenavService) {
    
  }

  public ngOnInit(): void {
  }

  public toggle(): boolean{
    this.isShowing = this.sidenavService.toggle();
   return this.isShowing;
    }
    
}


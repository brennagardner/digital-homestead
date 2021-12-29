import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  private isShowing: boolean = true;

  public constructor() { }

public toggle(): boolean {
    this.isShowing = !this.isShowing;
    return this.isShowing;
}

}

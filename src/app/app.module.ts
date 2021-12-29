import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav-component/sidenav-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider'
import { MainpageComponent } from './mainpage-component/mainpage-component.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ViewAllComponent } from './recipes/view-all/view-all.component';
import { AddNewComponent } from './recipes/add-new/add-new.component';
import { MyRecipesComponent } from './recipes/my-recipes/my-recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    MainpageComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    RecipesComponent,
    ViewAllComponent,
    AddNewComponent,
    MyRecipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

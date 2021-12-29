import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute, ParamMap } from '@angular/router';
import { MainpageComponent } from './mainpage-component/mainpage-component.component';
import { AboutComponent } from './about/about.component';
import { RecipesComponent } from './recipes/recipes.component';

const routes: Routes = [
  { path: 'mainpage', component: MainpageComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  constructor(
    private route: ActivatedRoute
  ) {}



}

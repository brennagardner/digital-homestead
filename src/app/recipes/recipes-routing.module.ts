import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import { ViewAllComponent } from './view-all/view-all.component';
import { AddNewComponent } from './add-new/add-new.component';
import { MyRecipesComponent } from './my-recipes/my-recipes.component';

const recipeRoutes: Routes = [
  { path: 'main',  component: RecipesComponent },
  { path: 'view-all', component: ViewAllComponent },
  { path: 'add-new', component: AddNewComponent },
  { path: 'my-recipes', component: MyRecipesComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(recipeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule { }
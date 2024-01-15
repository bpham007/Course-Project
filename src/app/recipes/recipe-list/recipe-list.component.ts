import { Component, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  // recipes: Recipe[] = [
  //   new Recipe(
  //     'A Test Recipe', 
  //     'This is simply a test', 
  //     'https://bakesbybrownsugar.com/wp-content/uploads/2022/01/Chocolate-Rugelach-2.jpg.webp'), 
  //   new Recipe(
  //     'Another Test Recipe', 
  //     'This is simply a test', 
  //     'https://bakesbybrownsugar.com/wp-content/uploads/2022/01/Chocolate-Rugelach-2.jpg.webp'), ];

  // ep. 121
  recipes: Recipe[] = [];

  // ep. 122, Omit to create ONselected service (click-event)
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService) {};
  //  ep. 121
  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  };

  // ep. 122, Omit to create ONselected service (click-event)
  // onRecipeSelected(recipe: Recipe) {this.recipeWasSelected.emit(recipe);}
}

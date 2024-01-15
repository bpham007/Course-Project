import { Component, Input, } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  @Input() recipe!: Recipe;

  constructor(private recipeService: RecipeService) {};

  // ep. 126-2:30, why not use .push to push the ingredients to shoplist?
  // onAddToShoppingList(ingredients: Ingredient[]) {
  //   this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  // }
}

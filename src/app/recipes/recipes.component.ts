import { Component } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService],
})
export class RecipesComponent {
  selectedRecipe!: Recipe;

  constructor(private recipeService: RecipeService) {};

  // ep. 122, 
  // Why subscribe in ngOnInit rather than constructor on services-start>new-account.comp.ts ????
  // subscribe(?), ? = recieve some data which is of type recipe (recipe: Recipe) > this is an argument list. 
  // For the function body after the ES6 arrow, 
  ngOnInit() {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {this.selectedRecipe = recipe;});
  }
}

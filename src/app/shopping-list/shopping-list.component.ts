import { Component } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  // ep. 123, Omit to lean
  // ingredients: Ingredient[] = [
  //   new Ingredient('Apples', 5),
  //   new Ingredient('Tomatoes', 10),];


  // ep. 123-1:39, why not "ingredients: Ingredient[] = []"? He put Recipe [] = []. ALSO why refresh glitch?
  ingredients: Ingredient[] = [];

  constructor(private slService: ShoppingListService) {};

  // ep. 123-3:04, heavy tasks and all Initializations should be done in #ngOnInit.
  // sooo assign and define properties like below.
  // ep. 124, second line - informing that we are getting a change and keeping copy/slice of array.
  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {this.ingredients = ingredients});
  };

  // ep. 123-4:10, Omitted for event. 
  // onIngredientAdded(ingredient: Ingredient) {this.ingredients.push(ingredient);};

}

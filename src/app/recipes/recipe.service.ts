import { EventEmitter, Injectable } from "@angular/core";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    
    // Make private so that you CAN'T directly ACCESS this array from outside. 
    // ep. 125, inserting Ingredient array
    private recipes: Recipe[] = [
        new Recipe('Chocolate Rugelach', 
        'Fun for the BUNS', 
        'https://bakesbybrownsugar.com/wp-content/uploads/2022/01/Chocolate-Rugelach-2.jpg.webp',
        [
            new Ingredient('Chocolate', 1), 
            new Ingredient('Buns', 2)]), 
        new Recipe('Pho', 
        'Vietnamese Soup', 
        'https://i0.wp.com/www.angsarap.net/wp-content/uploads/2014/11/Meatball-Pho.jpg?ssl=1',
        [
            new Ingredient('Noodle Pack', 1), 
            new Ingredient('Filet', 5)]), 
      ];


    constructor(private slSerivce: ShoppingListService) {};

// ep. 121 @1:20
    // create this method to return above array and get ACCESS to it from outside.
    //      RMR Arrays and OBJECTS are reference types in JS
    // if you write "return this.recipes;" in getRecipes> {}, 
    // if you change something on this array, we will change it on the array in this service. 
    // Therefore, call slice w/no arguments.> simply return a new array, which is an exact copy of the one in this service file. 
    // SO therefore, we really CAN'T ACCESS the recipes array stored here from outside. We only get a copy. 
    getRecipes() {
        return this.recipes.slice();
    };


    // ep. 126, sending ingredients to shoplist.        
    // *** you can write some logic to check if an item has already been added and group it together by name... 
    // but instructor did not show...Experiment?
    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slSerivce.addIngredients();
    };
}
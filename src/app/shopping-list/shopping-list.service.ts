import { Injectable, EventEmitter } from "@angular/core";

import { Ingredient } from "../shared/ingredient.model";

@Injectable()
export class ShoppingListService {
    // ep. 124, new event made to correct the slice problem when editing. 
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),];

    getIngredients() {
        return this.ingredients.slice();
    };
    
    // Why push and not emit? like in Recipe
    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        // ep. 124, to fix slice (copy) edits.
        this.ingredientsChanged.emit(this.ingredients.slice());
    };


    // ep. 126, a quick and easy way is loop through them then call addIngredeint for each ingredient. 
    // Downside is we emit alot of events; it wont be too bad w/a 30ingred. recipe to blowup app, unnecessary event emissions.
    // addIngredients(ingredients: Ingredient[]) {
    //     for (let ingredient of ingredients) {this.addIngredient(ingredient);}
    // };

    // ep. 126, #ES6 
    // "..." is a spread operator which allows us to turn an array of elements into a list of elements bc the
    // push method is able to handle multiple objs (1,2,etc) but cannot handle an "array" 
    // (it can push array but as a SINGLE obj to the other array).
    // now spread our ingredients into a list of single ingredients, which are now pushed w/no issues to our ingreds array.
    addIngredients() {
        this.ingredients.push(...this.ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    };
}
import { Component, EventEmitter, Input, Output, } from '@angular/core';

import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  @Input() recipe!: Recipe;

  // ep. 122, Omit to create ONselected service (click-event) between recipe-detail, and this comp. 
  // @Output() recipeSelected = new EventEmitter<void>();

  constructor(private recipeService: RecipeService) {};

  // ep. 122
  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  };
  // onSelected() {this.recipeSelected.emit()};      WHY??? why empty and above is with 'this.recipe'

} 

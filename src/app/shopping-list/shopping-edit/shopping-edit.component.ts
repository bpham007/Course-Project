import { Component, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef!: ElementRef;
  @ViewChild('amountInput') amountInputRef!: ElementRef;
  // @Output() ingredientAdded = new EventEmitter<{name: string, amount: number}>();  > this was before Ingredient model was made. 

  // ep. 123-4:10, Omit to lean click Event
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();
  
  constructor(private slService: ShoppingListService) {};
  
  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.slService.addIngredient(newIngredient);
  };

  // ep. 123, Omit to lean Click Event
  // onAddItem() {
  //   // const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value)
  //   const ingName = this.nameInputRef.nativeElement.value;
  //   const ingAmount = this.amountInputRef.nativeElement.value;
  //   const newIngredient = new Ingredient(ingName, ingAmount);
  //   this.ingredientAdded.emit(newIngredient);};

}

import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector: '[appDropdown]',
    exportAs: "appDropDown",
})
export class DropdownDirective {

    // HostBinding("insert class!!")
    @HostBinding('class.show') isOpen = false;

    // ep. 105.  Want to listen to a 'click' event. "Insert type event!!"
    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    };

    constructor() { };
}

// If you want that a dropdown can also be closed by a click anywhere outside 
// (which also means that a click on one dropdown closes any other one, btw.)
// DO THIS:

// import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';
 
// @Directive({
//   selector: '[appDropdown]'
// })
// export class DropdownDirective {
//   @HostBinding('class.open') isOpen = false;
//   @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
//     this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
//   }
//   constructor(private elRef: ElementRef) {}
// }

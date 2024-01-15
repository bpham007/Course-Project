import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Official-Project';
  loadedFeature = 'recipe';

  // ep. 88-6:00, switch from recipe to shopping page.
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

}
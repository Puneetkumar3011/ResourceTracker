import { Component } from '@angular/core';
import { ResourceService } from './resource/resource.service';

@Component({
  selector: 'property-root',
  templateUrl: './app.component.html',
  providers: [ResourceService]
})
export class AppComponent {
  title = 'app component';
}

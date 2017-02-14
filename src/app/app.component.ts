import { Component } from '@angular/core';
import { ResourceService } from './resource/resource.service';
import { UserService } from './user/user.service';

@Component({
  selector: 'property-root',
  templateUrl: './app.component.html',
  providers: [ResourceService, UserService]
})
export class AppComponent {
  title = 'app component';
}

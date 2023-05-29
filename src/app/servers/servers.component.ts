import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  //templateUrl: './servers.component.html', // either point to .html file or write html within this file
  // defining html with ts file
  template: `                               
      <app-server></app-server>
      <app-server></app-server>
    `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

}

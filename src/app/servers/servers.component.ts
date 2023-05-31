import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html', // either point to .html file or write html within this file
  // defining html with ts file
  // template: `                               
  //     <app-server></app-server>
  //     <app-server></app-server>
  //   `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created";
  serverName = '';


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() { }

  onAddServer() {
    this.serverCreationStatus = "Server Created";
  }

  // event - user input
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value; // explicit casting
  }


}

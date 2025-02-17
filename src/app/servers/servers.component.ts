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
  // isEmpty = true;
  serverCreationStatus = "No server was created";
  serverName = '';
  //userName = '';
  userNameProperty = 'This is the username property!';
  serverCreated = false;
  servers = ['TestServer1', 'TestServer2'];



  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() { }

  onAddServer() {
    this.serverCreationStatus = "Server Created! Server name is: " + this.serverName;
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }

  // event - user input
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value; // explicit casting
  }


  // onAddUser() {
  //   this.serverCreationStatus = "User Created! User name is: " + this.userName;
  //   this.userName = '';
  //   this.isEmpty = true;
  // }

  // onUpdateUserName(event: Event) {
  //   this.userName = (<HTMLInputElement>event.target).value;
  //   this.isEmpty = false;
  // }

}

import { Component } from "@angular/core";

@Component({
    // pass js objects (tell angular the purpose of this class)
    selector: 'app-server',   // should be a unique selector
    templateUrl: './server.component.html',
    styles: [`
        .online {
            color: white;
        }
    `]

})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = "Offline";

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}
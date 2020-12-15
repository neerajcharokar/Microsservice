import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class DrawerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // @ViewChild('drawer') sidenav: MatSidenav;
  // reason = '';
  // close(reason: string) {
  //   console.log("clicked");
    
  //   this.reason = reason;
  //   this.sidenav.close();
  // }

  // shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

}

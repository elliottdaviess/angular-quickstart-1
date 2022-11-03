import { Component } from '@angular/core';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../demo-styling.css']
})
export class AppComponent {
  title = 'angular-quickstart';
  isNative: boolean | undefined;
  platform: string | undefined;

  ngOnInit() : void {
    console.log(window.location);
    console.log(Capacitor.isNativePlatform());
    console.log(Capacitor.getPlatform());
    this.isNative = Capacitor.isNativePlatform();
    this.platform = Capacitor.getPlatform();
  }
}

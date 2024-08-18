import {Component} from '@angular/core';
import {NgStyle} from "@angular/common";
import {CheckboxComponent} from "./checkbox.component";
import {SliderComponent} from "./slider.component";
import {AppService} from "../app.service";

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    NgStyle,
    CheckboxComponent,
    SliderComponent
  ],
  template: `
      <div class="p-5 mt-2.5 w-full text-xs flex flex-col bg-white/10 border border-white/50 rounded-20">
          <div class="flex justify-between">
              <p>Password Versioning</p>
              <app-checkbox [(state)]="service.useVersions"/>
          </div>
          <div class="flex justify-between mt-2.5">
              <p>Use words for password</p>
              <app-checkbox [(state)]="service.useWords"/>
          </div>
          @if (service.useWords()) {
              <div class="flex justify-between mt-2.5">
                  <p>Number of words</p>
                  <app-slider [(value)]="service.wordCount" [min]="2" [max]="5"/>
              </div>
          } @else {
              <div class="flex justify-between mt-2.5">
                  <p>Number of characters</p>
                  <app-slider [(value)]="service.charCount" [min]="4" [max]="50"/>
              </div>
          }
      </div>
  `
})
export class SettingsComponent {

  constructor(protected service: AppService) {
  }

}

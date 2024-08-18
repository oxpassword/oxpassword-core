import {Component, model} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [
    NgClass
  ],
  template: `
      <label class='flex cursor-pointer select-none items-center'>
          <div class='relative'>
              <input type='checkbox' [checked]="state()" (change)="state.set(!state())" class='sr-only'/>
              <div class="block h-3.5 w-8 transition rounded-full border border-white/20"
                   [ngClass]="state() ? 'bg-appGreen' : 'bg-white/20'">
              </div>
              <div class="absolute -top-[1px] h-4 w-4 rounded-full bg-white/50 border border-black/30 transition"
                   [ngClass]="state() ? 'right-0':'left-0'">
              </div>
          </div>
      </label>
  `
})
export class CheckboxComponent {

  state = model<boolean>()

}

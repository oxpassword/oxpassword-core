import {Component, computed, input, model} from '@angular/core';
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [
    NgStyle
  ],
  template: `
      <label class="flex items-baseline">
          <input type="number" [min]="min()" [max]="max()" (input)="updateTrack($event)" (change)="fixTrack($event)" [value]="value()"
                 class="px-0 py-0.5 m-0 bg-transparent border-0 text-center"/>
          <input type="range" [min]="min()" [max]="max()"  (input)="updateTrack($event)" [value]="value()"
                 [ngStyle]="{background: 'linear-gradient(to right, rgb(255 255 255 / 0.3) 0%, rgb(255 255 255 / 0.3) '+track()+'%, transparent '+track()+'%, transparent 100%)'}"
                 class="appearance-none h-2 p-0 m-0 ml-1.5"/>
      </label>
  `
})
export class SliderComponent {

  value = model.required<number>()
  min = input.required<number>()
  max = input.required<number>()

  track = computed(() => ((this.value() - this.min()) / (this.max() - this.min())) * 100)

  updateTrack(event: any) {
    const val = Math.min(event.target.value, this.max())
    event.target.value = val
    this.value.set(val)
  }

  fixTrack(event: any) {
    const val = Math.max(event.target.value, this.min())
    this.value.set(val)
  }

}

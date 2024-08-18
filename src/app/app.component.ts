import {Component} from '@angular/core';
import {AppService} from "./app.service";
import {SettingsComponent} from "./components/settings.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SettingsComponent
  ],
  template: `
      <div class="w-full h-screen flex items-center justify-center text-xs">
          <div class="relative w-80 lg:w-1/3 h-full">
              <div class="absolute top-1/2 -translate-y-full w-full flex flex-col justify-end">
                  <input type="password" placeholder="Master Password" [value]="service.masterSecret()"/>
                  <input type="text" placeholder="Service Name" [value]="service.serviceName()"/>
                  @if (!isSimpleMode) {
                      <input type="password" placeholder="Secret Password" [value]="service.passwordSecret()"/>
                  }
                  <button type="button" class="px-6 py-4 my-2.5 text-white/90 bg-black/15 hover:bg-black/20
                                               border border-appGolden rounded-20 font-ubuntu">
                      {{service.generatedSecret()}}
                  </button>
              </div>
              <div class="absolute top-1/2 flex flex-col w-full h-48 px-5 items-center">
                  <div class="px-1.5 flex w-full justify-between">
                      <button type="button" class="inline-flex items-center" (click)="isSimpleMode = !isSimpleMode">
                          <svg class="mr-1.5" width="13" height="13" viewBox="0 0 13 13" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" fill="white"
                                    d="M8.69923 0.21995C8.84294 0.0795 9.03774 0.000610352 9.24084 0.000610352C9.44394 0.000610352 9.63874 0.0795 9.78244 0.21995L12.0817 2.46995C12.2252 2.61058 12.3059 2.8012 12.3059 2.99995C12.3059 3.1987 12.2252 3.38933 12.0817 3.52995L9.78244 5.77995C9.71228 5.85364 9.62767 5.91274 9.53365 5.95373C9.43964 5.99472 9.33815 6.01677 9.23524 6.01854C9.13233 6.02032 9.03011 6.00179 8.93468 5.96407C8.83925 5.92635 8.75256 5.87021 8.67978 5.79899C8.607 5.72777 8.54963 5.64294 8.51108 5.54955C8.47253 5.45616 8.4536 5.35613 8.45542 5.25543C8.45723 5.15473 8.47976 5.05541 8.52165 4.96341C8.56354 4.87141 8.62393 4.78861 8.69923 4.71995L9.69047 3.74995H3.87588C3.67261 3.74995 3.47766 3.67093 3.33393 3.53028C3.1902 3.38963 3.10945 3.19886 3.10945 2.99995C3.10945 2.80104 3.1902 2.61027 3.33393 2.46962C3.47766 2.32897 3.67261 2.24995 3.87588 2.24995H9.69047L8.69923 1.27995C8.55571 1.13933 8.47509 0.948701 8.47509 0.74995C8.47509 0.5512 8.55571 0.360576 8.69923 0.21995ZM3.65106 6.21995C3.79458 6.36058 3.8752 6.5512 3.8752 6.74995C3.8752 6.9487 3.79458 7.13932 3.65106 7.27995L2.65982 8.24995H8.47442C8.67768 8.24995 8.87263 8.32897 9.01636 8.46962C9.16009 8.61027 9.24084 8.80104 9.24084 8.99995C9.24084 9.19886 9.16009 9.38963 9.01636 9.53028C8.87263 9.67093 8.67768 9.74995 8.47442 9.74995H2.65982L3.65106 10.72C3.72636 10.7886 3.78676 10.8714 3.82864 10.9634C3.87053 11.0554 3.89306 11.1547 3.89487 11.2554C3.89669 11.3561 3.87776 11.4562 3.83921 11.5495C3.80067 11.6429 3.74329 11.7278 3.67051 11.799C3.59774 11.8702 3.51104 11.9264 3.41561 11.9641C3.32018 12.0018 3.21796 12.0203 3.11505 12.0185C3.01214 12.0168 2.91065 11.9947 2.81664 11.9537C2.72263 11.9127 2.63801 11.8536 2.56785 11.78L0.268577 9.52995C0.125051 9.38933 0.0444336 9.1987 0.0444336 8.99995C0.0444336 8.8012 0.125051 8.61058 0.268577 8.46995L2.56785 6.21995C2.71155 6.0795 2.90635 6.00061 3.10945 6.00061C3.31256 6.00061 3.50735 6.0795 3.65106 6.21995Z"/>
                          </svg>
                          Switch mode
                      </button>
                      <button type="button" (click)="showSettings = !showSettings">Settings</button>
                  </div>
                  @if (showSettings) {
                      <app-settings class="w-full"/>
                  }
              </div>
          </div>
      </div>
  `,
  styles: [],
})
export class AppComponent {

  isSimpleMode: boolean = false
  showSettings: boolean = true

  constructor(protected service: AppService) {
  }

}

import { Component, signal } from '@angular/core';
import { PageHeader } from "../../components/page-header/page-header";

@Component({
  selector: 'app-settings',
  imports: [PageHeader],
  templateUrl: './settings.html',
  styleUrl: './settings.css',
})
export class Settings {
    settings: string[] = [ "Homepage Settings", "Other Settings" ];
    selectedSetting = signal<string>(this.settings[0]);

    changeSetting(newSetting: string) {
        this.selectedSetting.set(newSetting);
    }
}

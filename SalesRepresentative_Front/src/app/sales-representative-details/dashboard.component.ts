import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-public-report',
  templateUrl: './dashboard.Component.html'
})
export class DashboardComponent {
  reportUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    const rawUrl = "https://app.powerbi.com/reportEmbed?reportId=23629608-bf9d-48c9-8d93-9d140ed34140&autoAuth=true&ctid=77ff5601-920f-479a-9f78-2c955dd0a1f0";
    this.reportUrl = this.sanitizer.bypassSecurityTrustResourceUrl(rawUrl);
  }
}
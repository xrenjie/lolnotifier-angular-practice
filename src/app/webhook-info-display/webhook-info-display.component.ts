import { Component, OnInit } from '@angular/core';
import { WebhookService } from '../webhook.service';

@Component({
  selector: 'app-webhook-info-display',
  templateUrl: './webhook-info-display.component.html',
  styleUrls: ['./webhook-info-display.component.css'],
})
export class WebhookInfoDisplayComponent implements OnInit {
  webhookName: string;
  webhookUrl: string;

  constructor(private webhookService: WebhookService) {}

  ngOnInit(): void {
    this.webhookService.getWebhookName().subscribe((value) => {
      this.webhookName = value;
    });
    this.webhookService.getWebhookUrl().subscribe((value) => {
      this.webhookUrl = value;
    });
  }

  handleBack() {
    this.webhookService.setLoaded(false);
    this.webhookService.setLoading(false);
    this.webhookService.setWebhookName('');
    this.webhookService.setWebhookUrl('');
    this.webhookService.setWebhookInputUrl('');
  }
}

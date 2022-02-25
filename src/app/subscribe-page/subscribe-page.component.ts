import { Component, OnInit } from '@angular/core';
import { WebhookService } from '../webhook.service';

@Component({
  selector: 'app-subscribe-page',
  templateUrl: './subscribe-page.component.html',
  styleUrls: ['./subscribe-page.component.css'],
  host: {
    class: 'mx-[20vw] my-20',
  },
})
export class SubscribePageComponent implements OnInit {
  loaded: boolean;
  loading: boolean;

  constructor(private webhookService: WebhookService) {}

  ngOnInit(): void {
    this.webhookService.getLoaded().subscribe((value) => {
      this.loaded = value;
    });
    this.webhookService.getLoading().subscribe((value) => {
      this.loading = value;
    });
  }
}

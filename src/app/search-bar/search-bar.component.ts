import { Component, OnInit, DoCheck } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { WebhookService } from '../webhook.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  loading: boolean = false;
  webhookError: boolean;

  webhookForm = this.formBuilder.group({
    webhookInputUrl: [{ value: '', disabled: false }],
  });

  constructor(
    private formBuilder: FormBuilder,
    private webhookService: WebhookService
  ) {}

  ngOnInit(): void {
    this.webhookService.getWebhookError().subscribe((value) => {
      this.webhookError = value;
    });
    this.webhookService.getLoading().subscribe((value) => {
      this.loading = value;
    });
  }

  ngDoCheck() {
    if (this.loading) {
      this.webhookForm.get('webhookInputUrl')!.disable();
    } else {
      this.webhookForm.get('webhookInputUrl')!.enable();
    }
  }

  onSubmit(event: any): void {
    event.preventDefault();
    let webhookInputUrl = this.webhookForm.controls['webhookInputUrl'].value;
    if (webhookInputUrl.length === 0) {
      this.webhookService.setWebhookError(true);
      return;
    }
    this.webhookService.setWebhookError(false);

    this.webhookService.setLoading(true);

    this.webhookService.fetchWebhook(webhookInputUrl);
  }
}

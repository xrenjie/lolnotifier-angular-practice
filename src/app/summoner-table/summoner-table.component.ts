import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WebhookService } from '../webhook.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-summoner-table',
  templateUrl: './summoner-table.component.html',
  styleUrls: ['./summoner-table.component.css'],
})
export class SummonerTableComponent implements OnInit {
  webhookUrl: string;
  submitted: boolean;
  summoners: any[];

  constructor(
    private webhookService: WebhookService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.webhookService.getWebhookUrl().subscribe((value) => {
      this.webhookUrl = value;
    });
    this.submitted = false;

    this.webhookService.getSummoners().subscribe((value) => {
      this.summoners = value;
    });
  }

  handleAddSummoner() {
    this.webhookService.addSummoner();
    console.log(this.summoners);
  }

  handleSubmit() {
    let summonersToSend: any[] = [];
    this.webhookService.getSummoners().subscribe((summoners) => {
      summonersToSend = summoners.filter((summoner) => {
        return summoner.name.length >= 3;
      });
    });
    this.http
      .put(`${environment.apiUrl}/edit`, {
        webhook: this.webhookUrl,
        summoners: summonersToSend,
      })
      .subscribe({
        next: (data) => {
          console.log(data);
          this.submitted = true;
          setTimeout(() => {
            this.submitted = false;
          }, 3000);
        },
        error: (error) => {
          console.warn(error);
        },
      });
  }
}

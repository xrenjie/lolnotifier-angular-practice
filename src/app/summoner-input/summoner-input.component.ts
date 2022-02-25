import { Component, Input, OnInit } from '@angular/core';
import { WebhookService } from '../webhook.service';

@Component({
  selector: 'app-summoner-input',
  templateUrl: './summoner-input.component.html',
  styleUrls: ['./summoner-input.component.css'],
})
export class SummonerInputComponent implements OnInit {
  @Input() summoner: any;
  @Input() index: number;
  summonerName: string;

  constructor(private webhookService: WebhookService) {}

  ngOnInit(): void {
    this.summonerName = this.summoner.name;
  }

  handleChange() {
    let summoners: any[] = [];
    this.webhookService
      .getSummoners()
      .subscribe((value) => {
        summoners = value;
      })
      .unsubscribe();
    summoners[this.index].name = this.summonerName;
    this.webhookService.setSummoners(summoners);
  }
}

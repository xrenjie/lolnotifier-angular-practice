import { Component, OnInit, Input } from '@angular/core';
import { WebhookService } from '../webhook.service';

@Component({
  selector: 'app-summoner-row',
  templateUrl: './summoner-row.component.html',
  styleUrls: ['./summoner-row.component.css'],
})
export class SummonerRowComponent implements OnInit {
  @Input() summoner: any;
  @Input() index: number;
  regions = [
    'br1',
    'eun1',
    'euw1',
    'jp1',
    'kr',
    'la1',
    'la2',
    'na1',
    'oc1',
    'ru',
    'tr1',
  ];
  confirmDelete: boolean;
  region: string;

  constructor(private webhookService: WebhookService) {}

  ngOnInit(): void {
    this.region = this.summoner.region;
  }

  setConfirmDelete(value: boolean) {
    this.confirmDelete = value;
  }

  handleDelete() {
    let newSummoners: any[] = [];
    this.webhookService
      .getSummoners()
      .subscribe((value) => {
        newSummoners = value;
      })
      .unsubscribe();
    newSummoners = newSummoners.filter(
      (summoner, index) => summoner._id !== this.summoner._id
    );
    this.webhookService.setSummoners(newSummoners);
  }

  handleChangeRegion() {
    let summoners: any[] = [];
    this.webhookService
      .getSummoners()
      .subscribe((value) => {
        summoners = value;
      })
      .unsubscribe();
    summoners[this.index].region = this.region;
    this.webhookService.setSummoners(summoners);
  }
}

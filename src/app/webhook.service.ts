import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WebhookService {
  webhookInputUrl: string = '';
  webhookUrl: BehaviorSubject<string>;
  summoners: BehaviorSubject<any[]>;
  webhookName: BehaviorSubject<string>;

  loaded: BehaviorSubject<boolean>;
  loading: BehaviorSubject<boolean>;
  webhookError: BehaviorSubject<boolean>;

  constructor(private http: HttpClient) {
    this.webhookError = new BehaviorSubject<boolean>(false);
    this.loading = new BehaviorSubject<boolean>(false);
    this.loaded = new BehaviorSubject<boolean>(false);
    this.webhookUrl = new BehaviorSubject<string>('');
    this.webhookName = new BehaviorSubject<string>('');
    this.summoners = new BehaviorSubject<any[]>([]);
  }

  fetchWebhook(webhook: string) {
    let params = new HttpParams().set('webhook', webhook);
    this.http.get<any>(webhook).subscribe({
      next: async (webhookData) => {
        if (webhookData.name) {
          this.setWebhookUrl(webhook);
          this.setWebhookName(webhookData.name);
          this.http
            .get<any>(`${environment.apiUrl}/get`, {
              params: params,
              responseType: 'json',
            })
            .subscribe({
              next: (data) => {
                this.setSummoners(
                  data.summoners.map((summonerNameWithRegion: string) => {
                    return {
                      name: summonerNameWithRegion.slice(
                        0,
                        summonerNameWithRegion.indexOf('#')
                      ),
                      region: summonerNameWithRegion.slice(
                        summonerNameWithRegion.indexOf('#') + 1
                      ),
                      _id: Math.random(),
                    };
                  })
                );
                this.setLoaded(true);
                console.log('success');
              },
              error: (error) => {
                this.setWebhookError(true);
              },
            });
        }
      },
      error: (error) => {
        console.warn(error);
      },
    });
    this.setLoading(false);
  }

  setWebhookError(error: boolean) {
    this.webhookError.next(error);
  }
  getWebhookError(): Observable<boolean> {
    return this.webhookError.asObservable();
  }

  setWebhookUrl(url: string) {
    this.webhookUrl.next(url);
  }
  getWebhookUrl(): Observable<string> {
    return this.webhookUrl.asObservable();
  }

  setWebhookName(name: string) {
    this.webhookName.next(name);
  }
  getWebhookName(): Observable<string> {
    return this.webhookName.asObservable();
  }

  setWebhookInputUrl(url: string) {
    this.webhookInputUrl = url;
  }

  setLoading(loading: boolean) {
    this.loading.next(loading);
  }
  getLoading(): Observable<boolean> {
    return this.loading.asObservable();
  }

  setLoaded(loaded: boolean) {
    this.loaded.next(loaded);
  }
  getLoaded(): Observable<boolean> {
    return this.loaded.asObservable();
  }

  setSummoners(summoners: any[]) {
    this.summoners.next(summoners);
  }
  getSummoners(): Observable<any[]> {
    return this.summoners.asObservable();
  }
  addSummoner(): void {
    this.summoners.next([
      ...this.summoners.getValue(),
      { name: '', region: 'na1', _id: Math.random() },
    ]);
  }
}

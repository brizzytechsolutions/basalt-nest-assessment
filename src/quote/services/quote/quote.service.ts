import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable, catchError, map } from 'rxjs';
import { Quote } from 'src/quote/models/quote/quote';
import { ApiConfigService } from '../api-config.service';

@Injectable()
export class QuoteService {
  private readonly apiKey: string;
  private readonly apiUrl: string;

  constructor(
    private readonly httpService: HttpService,
    private configService: ApiConfigService,
  ) {
    this.apiKey = configService.getApiKey();
    this.apiUrl = configService.getApiUrl();
  }

  private get headers() {
    return {
      'x-rapidapi-host': 'andruxnet-random-famous-quotes.p.rapidapi.com',
      'x-rapidapi-key': this.apiKey,
      'Content-Type': 'application/json',
    };
  }

  // Retrieves all quotes.
  getAllQuotes(): Observable<Quote[]> {
    const url = `${this.apiUrl}?cat=famous&count=20`;
    return this.httpService
      .get<{ quotes: Quote[] }>(url, { headers: this.headers })
      .pipe(
        map((response: AxiosResponse) => response.data.quotes),
        catchError(this.handleError),
      );
  }

  // Creates a new quote.
  createQuote(data: Quote): Observable<Quote> {
    const url = this.apiUrl;
    return this.httpService
      .post<Quote>(url, data, {
        headers: this.headers,
      })
      .pipe(
        map((response: AxiosResponse) => response.data),
        catchError(this.handleError),
      );
  }

  // Handles HTTP errors.
  private handleError(error: any): Observable<never> {
    console.error('There was an HTTP error', error);
    throw error;
  }
}

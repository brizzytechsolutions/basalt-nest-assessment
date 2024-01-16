import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiConfigService {
  private readonly apiKey: string;
  private readonly apiUrl: string;

  constructor() {
    this.apiKey = '15830244a0mshd9a90d4d162c80cp14cad6jsn0bb136052f75';
    this.apiUrl = 'https://andruxnet-random-famous-quotes.p.rapidapi.com/';
  }

  getApiKey(): string {
    return this.apiKey;
  }

  getApiUrl(): string {
    return this.apiUrl;
  }
}

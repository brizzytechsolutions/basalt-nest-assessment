import { Body, Controller, Get, Post } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { Quote } from 'src/quote/models/quote/quote';
import { QuoteService } from 'src/quote/services/quote/quote.service';

@Controller('api/quote')
export class QuoteController {
  constructor(private readonly quoteService: QuoteService) {}

  @Get()
  async AllQuotes(): Promise<Quote[]> {
    return firstValueFrom(this.quoteService.getAllQuotes());
  }

  @Post()
  async addQuote(@Body() data: Quote): Promise<Quote> {
    return firstValueFrom(this.quoteService.createQuote(data));
  }
}

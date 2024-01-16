import { Module } from '@nestjs/common';
import { QuoteController } from './controller/quote/quote.controller';
import { QuoteService } from './services/quote/quote.service';
import { HttpModule } from '@nestjs/axios';
import { ApiConfigService } from './services/api-config.service';

@Module({
  imports: [QuoteModule, HttpModule],
  controllers: [QuoteController],
  providers: [QuoteService, ApiConfigService],
})
export class QuoteModule {}

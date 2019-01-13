import { Currency } from '@/domain/common/money/Currency';

export class Money {
  private readonly amount: number;
  private readonly currency: Currency;

  constructor(amount: number, currency: Currency) {
    this.amount = amount;
    this.currency = currency;
  }

  public getAmount(): number {
    return this.amount;
  }

  public getCurrency(): Currency {
    return this.currency;
  }
}

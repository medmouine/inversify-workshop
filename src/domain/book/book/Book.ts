import { Money } from '../../common/money/Money';
import { Author } from '@/domain/book/author/Author';
import { BookId } from '@/domain/book/book/BookId';

export class Book {

  private readonly id: BookId;
  private readonly title: string;
  private readonly author: Author;
  private readonly description: string;
  private readonly buyPrice: Money;
  private readonly borrowPriceWeek: Money;

  constructor(id: BookId,
              title: string,
              author: Author,
              description: string,
              buyPrice: Money,
              borrowPriceWeek: Money) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.description = description;
    this.buyPrice = buyPrice;
    this.borrowPriceWeek = borrowPriceWeek;
  }

  public getId(): BookId {
    return this.id;
  }
  public getTitle(): string {
    return this.title;
  }

  public getAuthor(): Author {
    return this.author;
  }

  public getDescription(): string {
    return this.description;
  }

  public getBuyPrice(): Money {
    return this.buyPrice;
  }

  public getBorrowPricePerWeek(): Money {
    return this.borrowPriceWeek;
  }
}

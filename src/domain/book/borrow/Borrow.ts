import { BorrowId } from '@/domain/book/borrow/BorrowId';
import { Customer } from '@/domain/customer/Customer';
import { Book } from '@/domain/book/book/Book';

export class Borrow {
  public readonly id: BorrowId;
  public readonly book: Book;
  public readonly customer: Customer;
  public readonly startingDate: Date;
  public readonly endingDate: Date;

  constructor(id: BorrowId, book: Book, customer: Customer, startingDate: Date, endingDate: Date) {
    this.id = id;
    this.book = book;
    this.customer = customer;
    this.startingDate = startingDate;
    this.endingDate = endingDate;
  }

  public getId(): BorrowId {
    return this.id;
  }

  public getBook(): Book {
    return this.book;
  }

  public getCustomer(): Customer {
    return this.customer;
  }

  public getStartingDate (): Date {
    return this.startingDate;
  }

  public getEndingDate (): Date {
    return this.endingDate;
  }
}

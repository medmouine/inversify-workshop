import { BorrowId } from '@/domain/book/borrow/BorrowId';
import { Customer } from '@/domain/customer/Customer';
import { Book } from '@/domain/book/book/Book';
import {BorrowInterval} from '@/domain/book/borrow/BorrowInterval';

export class Borrow {
  public readonly id: BorrowId;
  public readonly book: Book;
  public readonly customer: Customer;
  public readonly borrowInterval: BorrowInterval

  constructor(id: BorrowId, book: Book, customer: Customer, borrowInterval: BorrowInterval) {
    this.id = id;
    this.book = book;
    this.customer = customer;
    this.borrowInterval = borrowInterval;
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

  public getBorrowInterval (): BorrowInterval {
    return this.borrowInterval;
  }
}

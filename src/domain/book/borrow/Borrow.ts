import { BorrowId } from '@/domain/book/borrow/BorrowId';
import { Book } from '@/domain/book/book/Book';
import { BorrowInterval } from '@/domain/book/borrow/BorrowInterval';
import { CustomerId } from '@/domain/customer/CustomerId';

export class Borrow {
  public readonly id: BorrowId;
  public readonly book: Book;
  public readonly customerId: CustomerId;
  public readonly borrowInterval: BorrowInterval;

  constructor(id: BorrowId, book: Book, customerId: CustomerId, borrowInterval: BorrowInterval) {
    this.id = id;
    this.book = book;
    this.customerId = customerId;
    this.borrowInterval = borrowInterval;
  }

  public getId(): BorrowId {
    return this.id;
  }

  public getBook(): Book {
    return this.book;
  }

  public getCustomerId(): CustomerId {
    return this.customerId;
  }

  public getBorrowInterval (): BorrowInterval {
    return this.borrowInterval;
  }
}
